<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compras extends Model
{
    protected $fillable = [
        'cliente_id', 'produto_id',
    ];   
}
