<?php
use App\Http\Controllers\RespostaController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/resposta', [RespostaController::class, 'store'])->name('resposta.store');
});