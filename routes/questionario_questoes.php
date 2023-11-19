<?php
use App\Http\Controllers\QuestionarioQuestoesController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/{questionario}/questao', [QuestionarioQuestoesController::class, 'index'])->name('questionario_questoes.index');
    Route::post('/{questionario}/questao/{questao}', [QuestionarioQuestoesController::class, 'store'])->name('questionario_questoes.store');
    Route::delete('/{questionario}/questao/{questao}', [QuestionarioQuestoesController::class, 'destroy'])->name('questionario_questoes.destroy');
});