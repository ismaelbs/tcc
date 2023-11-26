<?php
use App\Http\Controllers\ProfileController;
use App\Models\Questionario;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index', [
        'questionarios' => Questionario::all(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/assunto.php';
require __DIR__.'/corpo_conhecimento.php';
require __DIR__.'/disciplina.php';
require __DIR__.'/questao.php';
require __DIR__.'/respostas.php';
require __DIR__.'/questionarios.php';
require __DIR__.'/questionario_questoes.php';
require __DIR__.'/resultados.php';
require __DIR__.'/questionario_usuario.php';
require __DIR__.'/dicas.php';
require __DIR__.'/auth.php';
