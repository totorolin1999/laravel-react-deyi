<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LampsController;

use Illuminate\Support\Facades\Auth;
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

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/get/lamp/list', [LampsController::class, 'getLampList'])->name('lamp.list');


Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function() {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'admin'])->name('admin');

});

Route::post('/get/individual/lamp/details', [LampsController::class, 'getLampDetails'])->name('lamp.details');

Route::post('/update/lamp/data', [LampsController::class, 'updateLampData']);

Route::delete('/delete/lamp/data/{lamp}', [LampsController::class, 'destroy']);

Route::post('/store/lamp/data', [LampsController::class, 'store']);