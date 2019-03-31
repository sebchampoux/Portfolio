<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-01-10
 * Time: 18:37
 */

$context             = Timber::get_context();
$context['template'] = 'error-404';
Timber::render( array( '404.twig', 'index.twig' ), $context );