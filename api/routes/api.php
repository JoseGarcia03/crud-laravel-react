<?php

use App\Http\Controllers\EmpleadoController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(EmpleadoController::class)->group(function () {
    Route::get('/empleados', 'index');
    Route::post('/empleado', 'store');
    Route::get('/empleado/{id}', 'show');
    Route::put('/empleado/{id}', 'update');
    Route::delete('/empleado/{id}', 'destroy');
});
