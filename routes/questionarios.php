<?php
use App\Http\Controllers\QuestionarioController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/questionario/create', [QuestionarioController::class, 'create'])->name('questionario.create');
});