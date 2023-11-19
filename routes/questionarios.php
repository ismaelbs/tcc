<?php
use App\Http\Controllers\QuestionarioController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/questionario/create', [QuestionarioController::class, 'create'])->name('questionario.create');
    Route::post('/questionario', [QuestionarioController::class, 'store'])->name('questionario.store');
    Route::patch('/questionario/{questionario}', [QuestionarioController::class, 'update'])->name('questionario.update');
    Route::patch('/questionario/disable/{questionario}', [QuestionarioController::class, 'disable'])->name('questionario.disable');
    Route::patch('/questionario/enable/{questionario}', [QuestionarioController::class, 'enable'])->name('questionario.enable');
});