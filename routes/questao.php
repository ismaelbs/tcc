<?php
use App\Http\Controllers\QuestaoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/{assunto}/questao/create', [QuestaoController::class, 'create'])->name('questao.create');
    Route::post('/questao', [QuestaoController::class, 'store'])->name('questao.store');
    Route::patch('/questao/edit/{questao}', [QuestaoController::class, 'update'])->name('questao.update');
    Route::patch('/questao/disable/{questao}', [QuestaoController::class, 'disable'])->name('questao.disable');
    Route::patch('/questao/enable/{questao}', [QuestaoController::class, 'enable'])->name('questao.enable');
});