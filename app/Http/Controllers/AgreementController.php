<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AgreementController extends Controller {
    public function index(string $booking_id) {

        $response = Http::get("https://dev-api.makanat.com/api/v2/web/file/agreement?booking_id=" . $booking_id);

        if ($response->status() === 200) {

            if ($booking_id === 'f53613f8-9c57-444a-ac47-6832bd47ca08') {
                return view("meeting", $response->json()['data']);
            } else if ($booking_id === '0e13d9de-1d3e-4fc0-ba41-7bfb95cb4e0a') {
                return view("event", $response->json()['data']);
            } else if ($booking_id === 'bd5a0adb-630e-4fba-bc31-db6e03f56861') {
                return view("location", $response->json()['data']);
            } else {
                abort(404);
            }
        } else {
            abort(404);
            // return response()->json($response->json());
        }
    }
}
