<?php

use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\EmployeeController;
use App\Models\Department;
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
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::apiResource('employees', EmployeeController::class);
Route::apiResource('departments', DepartmentController::class);
// Route::apiResource('employees', EmployeeController::class)->middleware('auth:api');