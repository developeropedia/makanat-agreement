<?php

use App\Http\Controllers\AgreementController;
use Illuminate\Support\Facades\Route;

Route::get('/{booking_id}', [AgreementController::class, 'index']);
