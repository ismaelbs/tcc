<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use App\Models\Questao;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestaoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Assunto $assunto)
    {
        return Inertia::render('Questao/Index', [
            'assunto' => $assunto,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Questao $questao)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Questao $questao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Questao $questao)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Questao $questao)
    {
        //
    }
}
