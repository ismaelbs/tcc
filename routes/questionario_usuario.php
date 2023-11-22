<?php
use App\Http\Controllers\QuestionarioUsuarioController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/questionario/{questionario}/iniciar', [QuestionarioUsuarioController::class, 'iniciar'])->name('questionario_usuario.iniciar');
});