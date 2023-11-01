<?php

use App\Http\Controllers\AssuntoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/{disciplina}/assunto/create', [AssuntoController::class, 'create'])->name('assunto.create');
    Route::post('/assunto', [AssuntoController::class, 'store'])->name('assunto.store');
    Route::patch('/assunto/edit/{assunto}', [AssuntoController::class, 'update'])->name('assunto.update');
    Route::patch('/assunto/disable/{assunto}', [AssuntoController::class, 'disable'])->name('assunto.disable');
    Route::patch('/assunto/enable/{assunto}', [AssuntoController::class, 'enable'])->name('assunto.enable');
});