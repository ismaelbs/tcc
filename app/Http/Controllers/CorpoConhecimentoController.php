<?php

namespace App\Http\Controllers;

use App\Models\CorpoConhecimento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CorpoConhecimentoController extends Controller
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
        return Inertia::render('CorpoConhecimento/Index', [
            'corpo_conhecimentos' => CorpoConhecimento::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateInput = $request->validate([
            'tema' => ['required', 'max:50'],
        ]);

        CorpoConhecimento::create($validateInput);
  
        return redirect(route('corpo_conhecimento.create'));
    }

    /**
     * Display the specified resource.
     */
    public function show(CorpoConhecimento $corpoConhecimento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CorpoConhecimento $corpoConhecimento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CorpoConhecimento $corpoConhecimento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CorpoConhecimento $corpoConhecimento)
    {
        //
    }
}
