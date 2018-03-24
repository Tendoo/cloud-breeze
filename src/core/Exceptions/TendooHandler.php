<?php

namespace Tendoo\Core\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Database\QueryException;

class TendooHandler extends ExceptionHandler
{
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

                if( 
                    $exception instanceof ApiAmbiguousTokenException ||
                    $exception instanceof ApiForbiddenScopeException ||
                    $exception instanceof ApiMissingTokenException || 
                    $exception instanceof ApiUnknowEndpointException ||
                    $exception instanceof ApiUnknowTokenException
                ) {
                    return response()->json([
                        'status'    =>  'failed',
                        'message'   =>  $exception->getMessage()
                    ], 401 );
                }

                if ( 
                    $exception instanceof AccessDeniedException ||
                    $exception instanceof RecoveryExpiredException ||
                    $exception instanceof FeatureDisabledException
                ) {
                    return response()->json([
                        'status'    =>  'danger',
                        'message'   =>  $exception->getMessage()
                    ], 401 );
                }
            } else {
                if( $exception instanceof QueryException ) {
                    return response()->view( 'tendoo::errors.db-error', [ 'e' => $exception ] );
                } else if ( 
                    $exception instanceof AccessDeniedException ||
                    $exception instanceof RecoveryExpiredException ||
                    $exception instanceof FeatureDisabledException
                ) {
                    return response()->view( 'tendoo::errors.common', [ 'e' => $exception ] );
                }
            }
        }
        return parent::render($request, $exception);
    }
}
