<?php

namespace Tendoo\Core\Services;
use Tendoo\Core\Models\Site as SiteModel;

class Site
{
    /**
     * Get site
     * @param int site id
     * @return array of site details
     */
    public function get( int $id ) 
    {
        return SiteModel::find( $id )->toArray();
    }

    /**
     * Delete Site
     * @param int site id
     * @return void
     */
    public function delete( int $id )
    {
        return SiteModel::delete( $id );
    }
}