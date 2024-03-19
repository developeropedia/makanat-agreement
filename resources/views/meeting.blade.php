<!doctype html>
<html>

<head>
    <title>Meeting Agreement</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    <header>
        <!-- place navbar here -->
    </header>
    <main>
        <div class="page-container mb-3">
            <div class="row">
                <div class="col-8">
                    <h1 class="heading-m mb-0 pb-0 mx-0">Meetings Location Agreement</h1>
                    <h1 class="heading-m mb-0 pb-0 mx-0">إتفاقية تاجير مساحة عمل</h1>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-end ">
                        <svg width="30" height="35" viewBox="0 0 20 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 10.4667C0 4.96223 4.47714 0.5 10 0.5C15.5229 0.5 20 4.96223 20 10.4667V22.5C20 23.0523 19.5523 23.5 19 23.5H14.6154H9.23076H0.999999C0.447714 23.5 0 23.0523 0 22.5V17.3667V13.9167V10.4667ZM1.53846 17.3667V20.9667C1.53846 21.519 1.98618 21.9667 2.53846 21.9667H6.6923C7.24459 21.9667 7.69231 21.519 7.69231 20.9667V17.3667C7.69231 15.673 6.31472 14.3 4.61539 14.3C2.91604 14.3 1.53846 15.673 1.53846 17.3667ZM10.2308 21.9667C9.67848 21.9667 9.23076 21.519 9.23076 20.9667V17.3667C9.23076 14.8262 7.1644 12.7667 4.61539 12.7667C3.44097 12.7667 2.36901 13.2038 1.5544 13.9238C1.54822 13.9293 1.53846 13.9249 1.53846 13.9167C1.53846 10.741 4.12143 8.16667 7.30769 8.16667C10.4939 8.16667 13.0769 10.741 13.0769 13.9167V20.9667C13.0769 21.519 12.6292 21.9667 12.0769 21.9667H10.2308ZM18.4615 20.9667C18.4615 21.519 18.0138 21.9667 17.4615 21.9667H15.6154C15.0631 21.9667 14.6154 21.519 14.6154 20.9667V13.9167C14.6154 9.8942 11.3436 6.63333 7.30769 6.63333C6.28206 6.63333 5.30577 6.84392 4.41999 7.22408C3.49152 7.62256 2.27011 6.88584 2.80392 6.028C4.29599 3.6302 6.96089 2.03333 10 2.03333C14.6732 2.03333 18.4615 5.80907 18.4615 10.4667V20.9667Z"
                                fill="#121212" />
                        </svg>
                    </div>
                </div>
                <!-- <div class="col-4" lang="ar" dir="rtl">
                    <h1 class="heading mb-0 pb-0 mx-0"> إتـفـاقــيـــــــــة تأجيـــر مـوقــــع</h1>
                    <h2 class="text-gray">فعالية</h2>
                </div> -->

            </div>
            <div class="row mt-2 align-items-center mt-3">
                <div class="col-3">
                    <div class="text"><b>Booking number</b></div>
                </div>
                <div class="col-6">
                    <input type="text" id="booking_num" value="{{ $booking_id }}" class="w-100 input2">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text-arabic"><b>رقم الحجز

                        </b></div>
                </div>
            </div>

            <div class="row mt-4 pt-2">
                <div class="col-6">
                    <p class="text  text-justify ">
                        This Location Agreement <span class="w-700">(“Agreement”)</span> is entered into as of
                        <input type="text" id="agreement_date" value="{{ $confirmation_date }}" class="input ms-1 "
                            style="width: 140px;">، by
                        and between
                        <input type="text" id="party_name" value="{{ $guest_fullname }}" class="input  mb-1"
                            style="width: 230px;">
                        <span class="w-700">(“Event Organizer’)</span> and <input id="host_name"
                            value="{{ $host_fullname }}" type="text" class="input " style="width: 270px;"> <span
                            class="w-700">(“Host”)</span> for
                        Event Organizer to use the <span class="w-700">Space</span> for the <span class="w-700">Work
                            Meeting</span> mentioned in consideration of the rights granted in this Agreement, subject
                        to its performance, and in furtherance of the mutual interest and the financial value that Host
                        confirms to have received.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        تم إبرام إتفاقية الموقع هذه <b>(“الاتفاقية”)</b> في <input value="{{ $confirmation_date }}"
                            id="agreement_date_ar" type="text" class="input" style="width: 140px;">، بين كل من
                        <input type="text" id="party_name_ar" value="{{ $guest_fullname }}" class="input"
                            style="width: 190px;"> <b>(“منظم
                            الحدث”)</b>
                        و
                        <input type="text" value="{{ $host_fullname }}" id="host_name_ar" class="input"
                            style="width:270px;"> <b>(“المُضيف”)</b>
                        يستخدم منظم الحدث <span class="w-700">المساحة</span> في إطار <span class="w-700">اجتماع
                            العمل</span> نظيرًا للحقوق الممنوحة في هذه الاتفاقية، وبشرط تنفيذها ، وتحقيقًا للمصلحة
                        المتبادلة والقيمة المالية التي يؤكد المُضيف استلامها.






                    </p>
                </div>
            </div>
            <div class="row mt-2 align-items-center mb-2">
                <div class="col-3">
                    <div class="text"><b>“Space”: </b></div>
                </div>
                <div class="col-6">
                    <input value="{{ $estate_title }}" id="project_name" type="text" class="w-100 input2">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text"><b>“المساحة”: </b></div>
                </div>
            </div>
            <!-- <div class="row align-items-center mb-2">
                <div class="col-3">
                    <div class="text"><b>“Venue”</b></div>
                </div>
                <div class="col-6">
                    <input id="property_name" type="text" class="w-100 input2">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text"><b>“العقار” او “الموقع” </b></div>
                </div>
            </div> -->
            <div class="row align-items-center mb-2">
                <div class="col-2">
                    <div class="text">Located at</div>
                </div>
                <div class="col-8 mx-auto ">
                    <input value="{{ $estate_location['full'] }}" id="located_at" type="text"
                        class="w-100 input2">
                </div>
                <div class="col-2" lang="ar" dir="rtl">
                    <div class="text">الواقع في عنوان</div>
                </div>
            </div>
            <div class="row align-items-center mb-2">
                <div class="col-2">
                    <div class="text"><b>“Term”:</b></div>
                </div>
                <div class="col-2">
                    <div class="text text-end">Date&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkin_date }}" id="date" type="text" class="w-100 input2">
                </div>

                <div class="col-2" lang="ar" dir="rtl">
                    <div class="text"> &nbsp;&nbsp;&nbsp;&nbsp;تبدأ في تاريخ</div>
                </div>
                <div class="col-2" lang="ar" dir="rtl">
                    <div class="text"><b>الفترة”:</b></div>
                </div>
            </div>
            <div class="row align-items-center mb-2">
                <div class="col-2">
                </div>
                <div class="col-2">
                    <div class="text text-end">Start time</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkin_time }}" id="start_time" type="text" class="w-100 input2">
                </div>

                <div class="col-2" lang="ar" dir="rtl">
                    <div class="text ">زمن الدخول</div>
                </div>
                <div class="col-2" lang="ar" dir="rtl">
                </div>
            </div>
            <div class="row align-items-center mb-2">
                <div class="col-2">
                </div>
                <div class="col-2">
                    <div class="text text-end ">End time</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkout_time }}" id="end_time" type="text" class="w-100 input2">
                </div>

                <div class="col-2" lang="ar" dir="rtl">
                    <div class="text">زمن الخروج</div>
                </div>
                <div class="col-2" lang="ar" dir="rtl">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-6">
                    <h2 class="heading2">1. Payment</h2>
                    <p class="text   ">
                        <span class="medium">1.1 The Host</span> acknowledges that he is the owner or authorized and
                        has
                        the right, authority and power to manage the Space located at Address mentioned and to enter
                        into this agreement.
                    </p>
                    <p class="text   ">
                        <span class="medium">1.2 The Event Organizer</span>

                        shall pay Host, in full, a fee of <input value="{{ $host_payout_total }}" id="amount_1_2"
                            type="text" class="input" style="width: 100px;"> for the use of the Meeting Space.
                    </p>
                </div>
                <div class="col-6">
                    <h2 class="heading2" lang="ar" dir="rtl">1. تمهيد</h2>
                    <p class="text-arabic" lang="ar" dir="rtl">
                        1.1 يقر المضيف انه المالك او مفوض ولديه الحق والسلطة والصلاحية في إدارة المساحة الواقعة في
                        العنوان المذكور وإبرام هذه الاتفاقية.
                    </p>
                    <p class="text-arabic" lang="ar" dir="rtl">



                        1.2 يرغب منظم الحدث في استخدام العقار للحدث خلال فترة العقد مقابل إجمالي مبلغ <input
                            id="amount_1_2_ar" value="{{ $host_payout_total }}" type="text" class="input"
                            style="width: 130px;"> موضح بالتفاصيل
                        في الملحق
                        رقم (1).

                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <h2 class="heading2 mt-2 mb-3">Section 2: Terms and Conditions</h2>
                    <p class="text   ">
                        <span class="medium"> 2.1 Integration of Documents: </span>


                        Both Event Organizer and Host agree to comply with and be legally bound by the Terms of Service
                        and Privacy Policy located on the Makanat website at Makanat.com/terms , whether or not Event
                        Organizer or Host become registered users of the Makanat services.
                    </p>
                </div>
                <div class="col-6">
                    <h2 class="heading2" lang="ar" dir="rtl">المادة 2: الشروط والأحكام</h2>
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.1 إدماج المستندات:</span>
                        يوافق كل من منظم الحدث والمضيف على الامتثال بشروط استخدام الخدمة والتي تشمل سياسات الإلغاء
                        والموجودة على منصة مكانات عبر الموقع الإلكتروني Makanat.com/terms ، سواء أصبح المنتج أو المضيف
                        مستخدمين مسجلين في الموقع أم لا.
                    </p>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-6">
                    <p class="text3   mb-0 pb-0">
                        Location Agreement | اتفاقية موقع
                    </p>
                </div>
                <div class="col-6">
                    <p class="text3 mb-0 pb-0" lang="ar" dir="rtl">
                        Page 1 of 5 </p>
                </div>
            </div>
        </div>


        <div class="page-container mb-3 ">

            <div class="row ">
                <div class="col-6">
                    <p class="text  mb-0 pb-0 ">
                        <span class="medium">2.2 Permissions Granted:</span>
                    <ul class="mt-0 pt-0">
                        <li>
                            Event Organizer is granted the non-exclusive right to use the Meeting Space for the Meeting
                            during the Term.
                        </li>
                        <li>
                            Event Organizer shall not use the Meeting Space for any other purpose without Host's prior
                            written consent.
                        </li>
                    </ul>

                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0" lang="ar" dir="rtl">
                        <span class="medium">2.2 الصلاحيات الممنوحة:</span>
                    <ul lang="ar" dir="rtl">
                        <li>منح منظم الفعالية الحق غير الحصري في استخدام مكان الاجتماع للفعالية خلال المدة المحددة.</li>
                        <li>لا يجوز لمنظم الفعالية استخدام مكان الاجتماع لأي غرض آخر دون موافقة كتابية مسبقة من المضيف.
                        </li>
                    </ul>

                    </p>
                </div>
            </div>

            <!--
            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.3 Event Content: </span> The Event Organizer shall obtain all necessary
                        permits and licenses prior to the start of the event, and comply with all relevant laws and
                        regulations in Saudi Arabia.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.3 ضوابط المحتوى:</span>
                        يجب على منظم الحدث الحصول على جميع التصاريح والتراخيص اللازمة قبل بدء الحدث، والامتثال لجميع
                        القوانين واللوائح المعمول بها في المملكة العربية السعودية.
                    </p>
                </div>
            </div> -->

            <div class="row ">
                <div class="col-6">
                    <span class="medium">2.3 Rules:</span><br>
                    <ul class="ps-4">
                        <li class="text ">
                            Event Organizer shall comply with all applicable laws and regulations, including those
                            related to noise levels, occupancy limits, and safety.</li>
                        <li class="text ">
                            Event Organizer must abide to the Venue Owner's Space Rules for the use of the Venue
                            specified in the appendix (1).
                        </li>
                        <li class="text ">
                            Event Organizer and guests are not allowed to leave any equipment, personal belongings, in
                            any area of the premises or in the corridors. If any items are left, they will be disposed
                            of without compensation.</li>

                    </ul>
                </div>
                <div class="col-6" lang="ar" dir="rtl">
                    <span class="medium">2.3 القواعد:</span><br>
                    <ul class="pe-4 ps-0" lang="ar" dir="rtl" style="text-align: justify;">
                        <li class="text-arabic">
                            يلتزم منظم الفعالية بالامتثال لجميع القوانين واللوائح المعمول بها، بما في ذلك تلك المتعلقة
                            بمستويات الضوضاء، وحدود الإشغال، والسلامة.</li>
                        <li class="text-arabic">كما يجب على منظم الحدث الالتزام بقواعد المكان الخاصة بالمضيف لاستخدام
                            المكان والمذكورة في الملحق (1).</li>
                        <li class="text-arabic">لا يُسمح لمنظم الحدث والضيوف بترك أي معدات أو متعلقات شخصية في أي منطقة
                            من المبنى أو في الممرات, وإذا تُركت أي أغراض، فسيتم التخلص منها دون تعويض.</li>

                    </ul>

                </div>
            </div>


            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.4 Payment:</span>

                        Event Organizer shall pay the Host a total amount of <input value="{{ $host_payout_total }}"
                            id="amount_2_5" type="text" class="input " style="width: 130px !important;"> SAR
                        including VAT for the use
                        of the Venue during the Term.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.4 الدفع:</span>


                        يدفع منظم الحدث للمضيف مبلغًا إجماليًا قدره <input value="{{ $host_payout_total }}"
                            id="amount_2_5_ar" type="text" class="input " style="width: 130px !important;">ريال
                        سعودي شامل الضريبة مقابل
                        استخدام الموقع خلال المدة المتفق عليها.

                    </p>
                </div>
            </div>


            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.5 Overtime fee: </span>
                        In the event that the Event Organizer requests an increase in the Term, and after the Host
                        approval, Event Organizer is obligated to pay the overtime fees defined as the Hourly Rate
                        multiplied by One-and -half (x1.5) for the Property.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.5 رسوم ساعات العمل الاضافي: </span>
                        في حالة طلب منظم الحدث زيادة في الفترة ، وبعد موافقة المضيف ، سيتم تحصيل رسوم مقابل استخدام
                        اوقات العمل الإضافي تساوي قيمة الساعة الاضافية الواحدة مضروبة بواحد ونصف (x1.5) للعقار.
                    </p>
                </div>
            </div>
            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.6 Venue Handover:</span>
                        The Host is committed to handover the Venue to the Event Organizer at the agreed Term.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.6 تسليم الموقع: </span>
                        يلتزم المضيف بتسليم الموقع لمنظم الحدث خلال الفترة المتفق عليها ، لاستخدام العقار في إطار
                        المشروع.
                    </p>
                </div>
            </div>
            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.7 Force Majeure:</span>
                        If Event Organizer's use of the Venue is prevented or hampered by an event beyond Event
                        Organizer's control (including, but not limited to, weather-related delays), Event Organizer
                        shall have the right to use the Venue without any additional charge for an amount of additional
                        time equal to the time that was not used due to the Force Majeure event, commencing at a
                        mutually agreeable time following the end of the Force Majeure Event.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.7 القوة القاهرة </span>
                        إذا تم منع أو إعاقة استخدام منظم الحدث للموقع بسبب حدث خارج عن سيطرة المنتج (بما في ذلك ، على
                        سبيل المثال لا الحصر ، التأخيرات الناتجة عن الاحوال الجوية) ، فإنه يحق لمنظم الحدث عندئذٍ –
                        وبدون أي تكلفة إضافية – استخدام واستغلال الموقع المشار إليه لفترة زمنية إضافية تساوي الوقت
                        الضائع بسبب حالة القوة القاهرة ، على أن تبدأ هذه المهلة الإضافية في وقت يتفق عليه كلا الطرفين
                        بعد انتهاء حدث القوة القاهرة.
                    </p>
                </div>
            </div>
            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.8 Notifications: </span>
                        All communications between the the Host and the Event Organizer must be made through Makanat.com
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.8 الإشعارات:</span>
                        يوافق كل من منظم الحدث والمضيف على تقديم جميع الإخطارات بينهم من خلال قناة الدردشة المباشرة عبر
                        منصة الحجز Makanat.com
                    </p>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-6">
                    <p class="text3   mb-0 pb-0">
                        Location Agreement | اتفاقية موقع
                    </p>
                </div>
                <div class="col-6">
                    <p class="text3 mb-0 pb-0" lang="ar" dir="rtl">
                        Page 2 of 5 </p>
                </div>
            </div>
        </div>

        <div class="page-container mb-3">
            <div class="row bg-row align-items-center pt-2 mb-1">
                <div class="col-6">
                    <h2 class="medium text">2.9 Cancellation Policy:</h2>
                </div>
                <div class="col-6">
                    <h2 class="medium text-arabic" lang="ar" dir="rtl">2.9 سياسات الإلغاء:</h2>
                </div>
            </div>

            <div class="row bg-row row-border pt-2 mb-1 pb-2">
                <div class="col-6">
                    <p class="text  pb-0 mb-0 ">
                        <span class="medium">2.9.1 Makanat grace period:</span> Full refund for Bookings cancelled
                        within 24 hours from booking confirmation but no later than 48 hours prior to the Shoot start
                        time.

                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        <span class="medium">2.9.1 فترة السماح الخاصة بمكانات: </span>
                        سترداد كامل قيمة الحجز بشرط أن يقع الإلغاء خلال (24) ساعة من تاريخ استلام تأكيد الحجز وبما لا
                        يقل عن (48) ساعة من التاريخ المقرر لبدء التصوير.

                    </p>
                </div>
            </div>

            <div class="row bg-row row-border pt-2 mb-1 pb-2">
                <div class="col-6">
                    <p class="text  pb-0 mb-0 ">
                        <span class="medium">2.9.2 Space cancellation policy:</span>
                        Guests may cancel their Booking until 30 days before the event start time and will receive a
                        full refund
                        (including all Fees) of their Booking Price. Guests may cancel their Booking between 30 days and
                        7 days before
                        the event start time and receive a 50% refund (excluding Fees) of their Booking Price.
                        Cancellations submitted
                        less than 7 days before the Event start time are not refundable.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        <span class="medium">2.9.2 سياسة الإلغاء الخاصة بالمساحة: </span>

                        يجوز للضيوف إلغاء حجوزاتهم بشرط أن يقع الإلغاء قبل ثلاثين (30) يوم من الموعد المحدد لبدء
                        الفاعلية. وفى هذه
                        الحالة سيحصل الضيوف على استرداد كامل (بما في ذلك جميع الرسوم) عن مقابل الحجوزات الملغاة. إذا وقع
                        إلغاء الحجوزات
                        في الفترة ما بين ثلاثين (30) يوم إلى ما قبل سبعة (7) أيام من الوقت المحدد لبدء الفاعلية، فلا
                        يجوز للضيوف إلا
                        استرداد 50٪ من مقابل الحجوزات المدفوعة (باستثناء الرسوم). ولا يجوز استرداد مقابل الحجوزات التي
                        يجرى إلغائها في
                        مدة أقل من سبعة (7) أيام من وقت بدء الفاعلية.
                    </p>
                </div>
            </div>

            <div class="row bg-row row-border pt-2 mb-1 pb-2">
                <div class="col-6">
                    <p class="text  pb-0 mb-0 ">
                        2.9.3 In the event of cancellation of bookings by the Host, penalties may be imposed against him
                        and he may be liable for costs, expenses and other losses. In the event of cancellation of
                        bookings without excuse, the Host agrees to pay a penalty of 15% of the total booking price,
                        which represents the costs of evacuating the Producer to another location. </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        2.9.3 في حالة إلغاء الحجوزات من قبل المضيف، فإنه قد يتم فرض الغرامات ضده كما قد يكون مسؤولاً عن
                        التكاليف والنفقات والخسائر الأخرى. في حالة إلغاء الحجوزات بدون عذر ، يوافق المضيف على دفع غرامة
                        قدرها 15% من السعر الإجمالي للحجز والتي تمثل تكاليف إخلاء المنتج لموقع آخر.
                    </p>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.10 Agreement Duration:</span>
                        This Agreement expires at the end of the Term unless the Event Organizer requests an additional
                        period, and in all cases, it ends at the conclusion of the Event.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.10 مدة الاتفاقية:</span>
                        تنتهي هذه الاتفاقية في نهاية الفترة المشار إليها ما لم يطلب منظم الحدث ساعات عمل إضافية ، وفي
                        جميع الحالات ، تنتهي عند انتهاء حدث المنظم.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.11 Liability, Claims and Compensation:</span>
                        The Event Organizer, while taking reasonable care to prevent any damage to the Venue or its
                        contents during use, shall indemnify the Venue Owner for any physical damage to the Venue or its
                        contents, unless general liability insurance is provided in favor of the Venue Owner. The Event
                        Organizer agrees to indemnify any party affected by any damage or injury resulting from the use
                        of the Venue, provided that the damage is reported within 48 hours. In the event of any
                        proceeding or claim arising out of or relating to this Agreement, the use of the Venue, or the
                        conduct of the Event, the Venue Owner's sole remedy shall be to seek monetary damages.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.11 المسؤولية والمطالبات والتعويض:</span>
                        يلتزم منظم الحدث ، مع اتخاذ العناية المعقولة لمنع أي ضرر للمكان أو محتوياته أثناء الاستخدام ،
                        بتعويض مالك المكان عن أي ضرر مادي يصيب العقار أو محتوياته ، ما لم يتم تقديم تأمين شامل للمسؤولية
                        لصالح مالك المكان. يوافق منظم الفعالية على تعويض أي طرف يتأثر بأي ضرر أو إصابة ناتجة عن استخدام
                        المكان ، بشرط أن يتم الإبلاغ عن الضرر في غضون 48 ساعة من حدوثه. في حالة حدوث أي إجراء أو مطالبة
                        تنشأ عن أو تتعلق بهذه الاتفاقية ، أو استخدام الموقع ، أو إجراء الفعالية ، فإن التعويض الوحيد
                        لمالك المكان هو المطالبة بتعويض مالي.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.12 Governing Law:</span>
                        This agreement shall be governed by the laws of Saudi Arabia, with Saudi courts having exclusive
                        jurisdiction.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.12 القانون الواجب التطبيق:</span>
                        تخضع هذه الاتفاقية وتفسر وفقًا لقوانين المملكة العربية السعودية، وتتمتع المحاكم السعودية بالسلطة
                        القضائية لنظر أي نزاع أو خلاف ينشأ عنها أو فيما يتعلق بها.
                    </p>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-6">
                    <p class="text3   mb-0 pb-0">
                        Location Agreement | اتفاقية موقع
                    </p>
                </div>
                <div class="col-6">
                    <p class="text3 mb-0 pb-0" lang="ar" dir="rtl">
                        Page 3 of 5 </p>
                </div>
            </div>
        </div>

        <div class="page-container mb-3">
            <div class="" style="min-height: 900px;">
                <div class="row ">
                    <div class="col-6">
                        <p class="text   ">
                            <span class="medium">2.13 Bilingual Agreement:</span>
                            This agreement is made in the Arabic and English languages, with the Arabic language
                            prevailing
                            in case of conflict.
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="text-arabic" lang="ar" dir="rtl">
                            <span class="medium">2.13 اللغة السائدة:</span>
                            تم تحرير هذه الإتفاقية باللغتين العربية والانجليزية وفي حالة وجود تعارض بين النص العربي
                            والنص
                            الإنجليزي يتم ترجيح النص العربي.
                        </p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-6">
                        <p class="text   ">
                            <span class="medium">2.14</span>
                            This contract is made in two identical copies, signed by both parties. Each copy has the
                            same
                            legal force, and each party has received a copy.
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="text-arabic" lang="ar" dir="rtl">
                            <span class="medium">2.14</span>
                            حرر هذا العقد من نسختين متطابقه وقعتا من كلا الطرفين، ولكل نسخة الدرجة نفسها من الحجية وقد
                            تسلم
                            كل طرف نسخة منه.
                    </div>
                </div>
                <div class="row ">
                    <div class="col-6">
                        <div class="box box2">
                            <div class="d-flex justify-content-between align-items-center procedure-header px-2 py-1">
                                <p class="mb-0 pb-0" style="font-size: 12px !important;">Event&nbsp;Organizer</p>
                                <!-- <input id="producer_name" type="text" class="input2-box input2  "> -->
                                <p class="mb-0 pb-0 text-end " lang="ar" dir="rtl">منظم الحدث</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 mt-2">
                                <p class="mb-0 pb-0 text">Name:</p>
                                <input value="{{ $guest_fullname }}" id="box_1_name" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end " lang="ar" dir="rtl">الاسم:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">Title:</p>
                                <input value="{{ $project_tilte }}" id="box_1_title" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">المسمى
                                    الوظيفي:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">ID number:</p>
                                <input value="{{ $guest_id }}" id="box_1_id" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">هوية رقم:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">Date:</p>
                                <input value="{{ $confirmation_date }}" id="box_1_date" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">التاريخ:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2  ">
                                <div class="mb-0 pb-0 box-text">Verified via Makanat.com</div>
                                <div class="mb-0 pb-0 box-text" lang="ar" dir="rtl">موثق عبر مكانات</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="box box2">
                            <div class="d-flex justify-content-between align-items-center host-header px-2 py-1">
                                <p class="mb-0 pb-0">HOST:</p>
                                <!-- <input id="box_2_host" type="text" class="input2-box input2  "> -->
                                <p class="mb-0 pb-0 text-end" lang="ar" dir="rtl">المضيـــف</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 mt-2">
                                <p class="mb-0 pb-0 text">Name:</p>
                                <input value="{{ $host_fullname }}" id="box_2_name" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">الاسم:</p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">ID number:</p>
                                <input value="{{ $host_id }}" id="box_2_id" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">هوية رقم:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">License/CR No.:</p>
                                <input value="{{ $company_cr }}" id="box_2_license" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end " lang="ar" dir="rtl">رخصة/سجل:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2 mb-2 ">
                                <p class="mb-0 pb-0 text">Date:</p>
                                <input value="{{ $confirmation_date }}" id="box_2_date" type="text"
                                    class="input2-box input2  ">
                                <p class="mb-0 pb-0 text-arbic text-end " lang="ar" dir="rtl">التاريخ:</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center px-2">
                                <div class="mb-0 pb-0 box-text">Verified via Makanat.com</div>
                                <div class="mb-0 pb-0 box-text" lang="ar" dir="rtl">موثق عبر مكانات</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-6">
                    <p class="text3   mb-0 pb-0">
                        Location Agreement | اتفاقية موقع
                    </p>
                </div>
                <div class="col-6">
                    <p class="text3 mb-0 pb-0" lang="ar" dir="rtl">
                        Page 4 of 5 </p>
                </div>
            </div>
        </div>

        <div class="page-container mb-3">
            <div class="appendix-header">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Appendix (1):</h2>
                    <h2 lang="ar" dir="rtl">الملحق (1):</h2>
                </div>
            </div>
            <div class="row mt-3 mb-1">
                <div class="col-6">
                    <h2 class="heading2">
                        Details & fees
                    </h2>
                </div>
                <div class="col-6">
                    <h2 class="heading2" lang="ar" dir="rtl">
                        التفاصيل والرسوم
                    </h2>

                </div>
            </div>
            <div class="row justify-content-between   align-items-center mb-2">
                <div class="col-3">
                    <div class="text medium">Event Date</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkin_date }}" id="shoot_date" type="text" class="w-100 input2"
                        placeholder="-">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">تاريخ الحدث</div>
                </div>
            </div>
            <div class="row justify-content-between   align-items-center mb-2">
                <div class="col-3">
                    <div class="text medium">Start time</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkin_time }}" id="start_time_last" type="text" class="w-100 input2"
                        placeholder="-">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">موعد الدخول</div>
                </div>
            </div>
            <div class="row justify-content-between   align-items-center mb-2">
                <div class="col-3">
                    <div class="text medium">End time</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkout_time }}" id="end_time_last" type="text" class="w-100 input2"
                        placeholder="-">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">موعد الخروج</div>
                </div>
            </div>

            <div class="row justify-content-between   align-items-center mb-2">
                <div class="col-3">
                    <div class="text medium">Total Hours</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $booking_duration }}" id="total_hours" type="text" class="w-100 input2"
                        placeholder="-">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">مجموع الساعات</div>
                </div>
            </div>
            <div class="row justify-content-between   align-items-center mb-2">
                <div class="col-3">
                    <div class="text medium">Space Rate</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $hourly_rate }}" id="hourly_rate" type="text" class="w-100 input2"
                        placeholder="SAR/hr ">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">سعر الساعة للمساحة</div>
                </div>
            </div>


            <div class="row mt-2">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">Overtime rate</span>
                        is defined as the Hourly Rate multiplied by 1.5
                        plus time-and-a-half for any property and/or site managers.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">معدل العمل الاضافي:</span>
                        يتم تعريف معدل العمل الإضافي على أنه قيمة الساعة الواحدة مضروبًا في 1.5 لرسوم العقار واجور مدير
                        الموقع.
                    </p>
                </div>
            </div>

            <div class="row booking-header py-1 mb-2 align-items-center ">
                <div class="col-4">
                    <p class="text  mb-0 pb-0 ">
                        <span class="medium">Total Booking Value</span>
                    </p>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $host_payout_total }}" id="total_booking" type="text" class="w-100 input2"
                        placeholder="SAR">
                </div>
                <div class="col-4">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        <span class="medium">إجمالي قيمة الحجز</span>

                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-4">
                    <p class="text   ">
                        <span class="medium">Protection deposit</span>
                    </p>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $protection_deposit }}" id="protection_deposit" type="text"
                        class="w-100 input2" placeholder="SAR">
                </div>
                <div class="col-4">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">مبلغ تأمين</span>

                    </p>
                </div>
            </div>

            <div class="row justify-content-between ">
                <div class="col-4">
                    <p class="text   mb-0 pb-0">
                        <span class="medium">Host Rules</span>
                    </p>
                </div>

                <div class="col-4">
                    <p class="text-arabic pb-0 mb-0" lang="ar" dir="rtl">
                        <span class="medium">قواعد المضيف</span>
                    </p>
                </div>
                <div class="col-12 ">
                    <textarea name="" id="host_rules" rows="20">{{ $space_rules }}</textarea>
                </div>
                <div class="col-12 box border-0 p-0">
                    <p class="text-arabic pb-0 mb-0 text-end " lang="ar" dir="rtl">
                        إخلاء مسؤولية: يقر المستخدم بأن مقدمي الخدمات التي توفرهم مكانات إنما هم مقاولون مستقلون، وأن
                        علاقة مكانات بمقدمي الخدمات هي علاقة مستقلة تماما عن علاقتها بالمستخدم. لذلك، لا يجوز صراحة ولا
                        ضمناً أن تكون مكانات مسؤولة عن أي خدمة مقدمة أو خسارة أو ضرر ينشا أو يترتب عن ذلك بشكل مباشر أو
                        غير مباشر . ولا تتدخل مكانات في تقييم مقدمي الخدمات، ولا يجوز اعتبار وجود اسم مقدم الخدمة في
                        الدليل أو بالمنصة بأي حال على أنه توصية لاختيار مقدم خدمة معين. ويكون مقدم الخدمة مسؤولاً وحده
                        عن جودة ومدى تناسب الخدمة المقدمة كما يكون مسؤولاً عن المعلومات التي يقدمها.
                    </p>
                    <hr class="line">
                    <p class="text text-center   mb-0 pb-0">
                        © Makanat International LLC. | 4549 Al Urubah Rd, 8498 Al Olaya Dist, Riyadh 12333 |
                        support@makanat.com | makanat.com
                    </p>
                </div>
            </div>


            <div class="row mt-4">
                <div class="col-6">
                    <p class="text3   mb-0 pb-0">
                        Location Agreement | اتفاقية موقع
                    </p>
                </div>
                <div class="col-6">
                    <p class="text3 mb-0 pb-0" lang="ar" dir="rtl">
                        Page 5 of 5 </p>
                </div>


            </div>
        </div>
    </main>
    <footer class="footer">
        <button class="button1">تحميل/Download</button>
        <button class="button2 ms-2">طباعة/Print</button>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
        integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.1/jspdf.plugin.autotable.min.js"
        integrity="sha512-8+n4PSpp8TLHbSf28qpjRfu51IuWuJZdemtTC1EKCHsZmWi2O821UEdt6S3l4+cHyUQhU8uiAAUeVI1MUiFATA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('js/IBMPlexSansArabic-Regular-normal.js') }}"></script>
    <script src="{{ asset('js/IBMPlexSansArabic-Medium-normal.js') }}"></script>
    <script src="{{ asset('js/IBMPlexSansArabic-SemiBold-normal.js') }}"></script>
    <script src="{{ asset('js/IBMPlexSansArabic-Bold-normal.js') }}"></script>
    <script src="{{ asset('js/meeting-pdf.js') }}"></script>

    <script>
        $(".button1").click(function() {
            generatePDF()
            downloadPDF()
        })

        $(".button2").click(function() {
            generatePDF()
            printPDF()
        })
    </script>
</body>

</html>
