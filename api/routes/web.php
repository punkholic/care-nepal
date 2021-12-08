<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/disaster','App\Http\Controllers\DisasterController@index');
Route::get('/disasterTable','App\Http\Controllers\DisasterController@tableIndex');
Route::delete('/disasterTable/{id}','App\Http\Controllers\DisasterController@destroy');
Route::post('/disaster','App\Http\Controllers\DisasterController@store');
Route::get('/disaster/{id}','App\Http\Controllers\DisasterController@edit');
Route::get('/test/{id}/{asd}','App\Http\Controllers\Controller@index');
