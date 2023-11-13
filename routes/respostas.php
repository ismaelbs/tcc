<?php
use App\Http\Controllers\RespostaController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/resposta', [RespostaController::class, 'store'])->name('resposta.store');
    Route::patch('/resposta/{resposta}/mark-as-correct', [RespostaController::class, 'markAsCorrect'])->name('resposta.markAsCorrect');
    Route::patch('/resposta/edit/{resposta}', [RespostaController::class, 'update'])->name('resposta.update');
});