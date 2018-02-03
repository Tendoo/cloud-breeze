<?php

namespace Tendoo\App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Database\QueryException;

class TendooHandler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        // \Illuminate\Auth\AuthenticationException::class,
        // \Illuminate\Auth\Access\AuthorizationException::class,
        // \Symfony\Component\HttpKernel\Exception\HttpException::class,
        // \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        // \Illuminate\Session\TokenMismatchException::class,
        // \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if( ! config( 'app.debug', false ) ) {
            if ( $request->expectsJson() ) {

                if( $exception instanceof HttpException ) {
                    return response()->json([
                        'status'    =>  'failed',
                        'message'   =>  __( 'Page Not Found' ),
                        'code'      =>  $exception->getStatusCode()
                    ], 401 );
                }
    
                if( $exception instanceof TokenMismatchException ) {      
                    return response()->json([
                        'status'    =>  'failed',
                        'message'   =>  __( 'Token Error Mismatch' ),
                        'code'      =>  'token-error'
                    ], 401 );            
                }
    
                if( $exception instanceof QueryException ) {
                    return response()->json([
                        'status'    =>  'failed',
                        'message'   =>  $exception->getMessage(),
                        'code'      =>  'db-error'
                    ], 401 );
                }

                if ( $exception instanceof AccessDeniedException ) {
                    return response()->json([
                        'status'    =>  'danger',
                        'message'   =>  $exception->getMessage()
                    ], 401 );
                }
            } else {
                if( $exception instanceof QueryException ) {
                    return response()->view( 'errors.db-error', [ 'e' => $exception ] );
                } else if ( $exception instanceof AccessDeniedException ) {
                    return response()->view( 'errors.access-denied', [ 'e' => $exception ] );
                }
            }
        }
        return parent::render($request, $exception);
    }
}
