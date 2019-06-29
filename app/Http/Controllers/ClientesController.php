<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;

class ClientesController extends Controller
{
     public function index() {
        return Clientes::all();
     }
     public function create() {
        echo 'create';
     }
     public function store(Request $request) {
        return Clientes::create($request->all());
     }
     public function show($id) {
      return Clientes::findOrFail($id);
     }
     public function edit($id) {
        echo 'edit';
     }
     public function update(Request $request, $id) {
        $cliente = Clientes::find($id);

        $cliente->nome = $request->nome;
        $cliente->sobrenome = $request->sobrenome;
        $cliente->cpf = $request->cpf;
        $cliente->email = $request->email;
        $cliente->data_nascimento = $request->data_nascimento;

        $cliente->save();

        return $cliente->id;
     }
     public function destroy($id) {
        Clientes::destroy($id);
        return $id;
     }
}
