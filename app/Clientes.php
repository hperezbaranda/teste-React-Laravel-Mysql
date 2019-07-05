<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $fillable = [
        'nome', 'sobrenome', 'cpf', 'email', 'data_nascimento',
    ];
    public function compras()
    {
      	return $this->belongsToMany('App\Compras', 'compra_cliente');
    }
    // protected $guarded = ['id','created_at', 'updated_at'];
    // protected $table = clientes;
}
