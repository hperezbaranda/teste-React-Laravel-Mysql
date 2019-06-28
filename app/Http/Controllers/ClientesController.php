<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;

class ClientesController extends Controller
{
    public function index() {
        echo 'index';
        return Clientes::all();
     }
     public function create() {
        echo 'create';
     }
     public function store(Request $request) {
        echo 'store';
        return Clientes::create($request->all());
     }
     public function show($id) {
        echo $id;
     }
     public function edit($id) {
        echo 'edit';
     }
     public function update(Request $request, $id) {
        echo 'update';
     }
     public function destroy($id) {
        echo 'destroy';
     }
}
