<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-01-10
 * Time: 18:37
 */

$context = Timber::get_context();
Timber::render( array( 'front-page.twig', 'index.twig' ), $context );
