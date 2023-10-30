<?php
use App\Http\Controllers\DisciplinaController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/{corpoConhecimento}/disciplina/create', [DisciplinaController::class, 'create'])->name('disciplina.create');
    Route::post('/disciplina', [DisciplinaController::class, 'store'])->name('disciplina.store');
    Route::patch('/disciplina/edit/{disciplina}', [DisciplinaController::class, 'update'])->name('disciplina.update');
    Route::patch('/disciplina/disable/{disciplina}', [DisciplinaController::class, 'disable'])->name('disciplina.disable');
    Route::patch('/disciplina/enable/{disciplina}', [DisciplinaController::class, 'enable'])->name('disciplina.enable');
});