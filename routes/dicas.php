<?php
use App\Http\Controllers\DicaController;
use Illuminate\Support\Facades\Route;
Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/dicas/{questao}', [DicaController::class, 'store'])->name('dica.store');
});