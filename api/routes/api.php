<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/places','App\Http\Controllers\PlacesController@index');
Route::get('/users','App\Http\Controllers\UserController@index');
Route::get('/plasma','App\Http\Controllers\UserController@getPlasma');
Route::get('/blood','App\Http\Controllers\UserController@getBlood');
Route::get('/users/{id}','App\Http\Controllers\UserController@getUser');
Route::post('/users','App\Http\Controllers\UserController@store');
Route::post('/login','App\Http\Controllers\UserController@login');
Route::get('/disaster','App\Http\Controllers\DisasterController@disasterApiIndex');
Route::get('/food','App\Http\Controllers\DisasterController@foodApiIndex');
