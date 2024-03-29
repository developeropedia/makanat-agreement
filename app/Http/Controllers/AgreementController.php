<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AgreementController extends Controller {
    public function index(string $booking_id) {

        $response = Http::get("https://dev-api.makanat.com/api/v2/web/file/agreement?booking_id=" . $booking_id);

        if ($response->status() === 200) {
            $category = $response->json()['data']['booking_type'];

            $data = $response->json()['data'];

            switch ($category) {
                case "Category A 💼":
                    return view("meeting", $data);
                case "category B 🥳":
                    return view("event", $data);
                case "Category C 🎬":
                    return view("location", $data);
                default:
                    abort(404);
            }
        } else {
            abort(404);
            // return response()->json($response->json());
        }
    }
}
