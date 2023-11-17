<?php

namespace App\Http\Controllers;

use App\Models\Questionario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionarioController extends Controller
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
    public function create()
    {
        return Inertia::render('Questionario/Index', [
            'questionarios' => Questionario::all(),
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
    public function show(Questionario $questionario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Questionario $questionario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Questionario $questionario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Questionario $questionario)
    {
        //
    }
}
