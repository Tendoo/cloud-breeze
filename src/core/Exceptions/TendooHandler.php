<?php

namespace Tendoo\Core\Exceptions;

use Exception;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;


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
        if ( $request->expectsJson() ) {

            if( $exception instanceof HttpException ) {
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  __( 'Page Not Found' ),
                    'code'      =>  $exception->getStatusCode(),
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );
            }

            if( $exception instanceof TokenMismatchException ) {      
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  __( 'Token Error Mismatch' ),
                    'code'      =>  'token-error',
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );            
            }

            if( $exception instanceof QueryException ) {
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  $exception->getMessage(),
                    'code'      =>  'db-error',
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );
            }

            if ( $exception instanceof CrudException ) {
                return response()->json( $exception->getResponse() );
            }

            if ( 
                $exception instanceof AccessDeniedException ||
                $exception instanceof RecoveryExpiredException ||
                $exception instanceof FeatureDisabledException ||
                $exception instanceof FloodRequestException ||
                $exception instanceof ApiAmbiguousTokenException ||
                $exception instanceof ApiForbiddenScopeException ||
                $exception instanceof ApiMissingTokenException || 
                $exception instanceof ApiUnknowScopeException || 
                $exception instanceof BadRequestException || 
                $exception instanceof ApiUnknowEndpointException || // this might be deprecated
                $exception instanceof ApiUnknowTokenException || 
                $exception instanceof OauthDeniedException ||
                $exception instanceof WrongCredentialException ||
                $exception instanceof DBConnexionException ||
                $exception instanceof CoreException ||
                $exception instanceof TendooNotInstalledException ||
                $exception instanceof TendooInstalledException

            ) {
                return response()->json([
                    'status'    =>  'failed',
                    'class'     =>  str_replace( '\\', '/', get_class( $exception ) ),
                    'message'   =>  $exception->getMessage(),
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );
            }

            if ( $exception instanceof ModuleMigrationRequiredException ) {
                return response()->json([
                    'status'    =>  'failed',
                    'class'     =>  str_replace( '\\', '/', get_class( $exception ) ),
                    'message'   =>  $exception->getMessage(),
                    'migration' =>  $exception->getMigration(),
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );
            }

            if ( $exception instanceof RedirectException ) {
                return response()->json([
                    'status'        =>  'failed',
                    'class'         =>  str_replace( '\\', '/', get_class( $exception ) ),
                    'message'       =>  $exception->getMessage(),
                    'redirectTo'    =>  $exception->getRedirection(),
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 401 );
            }

            if (
                $exception instanceof NotFoundException
            ) {
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  $exception->getMessage(),
                    'line'      =>  $exception->getLine(),
                    'file'      =>  $exception->getFile(),
                ], 404 );
            }
            
        }
        return parent::render($request, $exception);
    }
}
