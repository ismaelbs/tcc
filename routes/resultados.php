<?php
use App\Http\Controllers\ResultadosController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/resultados', [ResultadosController::class, 'index'])->name('resultados.index');
});