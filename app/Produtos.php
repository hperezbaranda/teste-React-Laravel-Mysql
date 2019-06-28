<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $fillable = [
        'nome', 'descricao', 'unidade', 'quantidade', 'preco',
    ];
    protected $guarded = ['id','created_at', 'updated_at'];
    protected $table = produtos;

}
