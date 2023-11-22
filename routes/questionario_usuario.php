<?php
use App\Http\Controllers\QuestionarioUsuarioController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/questionario/{questionario}/responder', [QuestionarioUsuarioController::class, 'responder'])->name('questionario_usuario.responder');
});