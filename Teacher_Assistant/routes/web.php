<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return 'hello';
});

Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');


