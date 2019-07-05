<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $fillable = [
        'nome', 'descricao', 'unidade', 'quantidade', 'preco',
    ];
    public function produtos()
    {
      	return $this->belongsToMany('App\Compras', 'compra_produto');
    }
}
