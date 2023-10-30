<?php
use App\Http\Controllers\CorpoConhecimentoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/corpo_conhecimento/create', [CorpoConhecimentoController::class, 'create'])->name('corpo_conhecimento.create');
    Route::post('/corpo_conhecimento', [CorpoConhecimentoController::class, 'store'])->name('corpo_conhecimento.store');
    Route::patch('/corpo_conhecimento/edit/{corpoConhecimento}', [CorpoConhecimentoController::class, 'update'])->name('corpo_conhecimento.update');
    Route::patch('/corpo_conhecimento/disable/{corpoConhecimento}', [CorpoConhecimentoController::class, 'disable'])->name('corpo_conhecimento.disable');
    Route::patch('/corpo_conhecimento/enable/{corpoConhecimento}', [CorpoConhecimentoController::class, 'enable'])->name('corpo_conhecimento.enable');
});
