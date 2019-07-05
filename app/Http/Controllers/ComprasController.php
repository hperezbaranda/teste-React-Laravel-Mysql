<?php

namespace App\Http\Controllers;

use App\Compras;
use Illuminate\Http\Request;

class ComprasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Compras::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Compras::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Compras  $compras
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Compras::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Compras  $compras
     * @return \Illuminate\Http\Response
     */
    public function edit(Compras $compras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $compra = Compras::find($id);

        $compra->cliente_id = $request->cliente_id;
        $compra->produto_id = $request->produto_id;
        $compra->save();

        return $compra->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Compras  $compras
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Compras::destroy($id);
        return $id;
    }
}
