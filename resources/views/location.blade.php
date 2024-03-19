<!doctype html>
<html>

<head>
    <title>Location Agreement</title>
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
                <div class="col-4">
                    <h1 class="heading mb-0 pb-0 mx-0">Location&nbsp;Agreement</h1>
                    <h2 class="text-gray">Production</h2>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-center ">
                        <svg width="30" height="35" viewBox="0 0 20 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 10.4667C0 4.96223 4.47714 0.5 10 0.5C15.5229 0.5 20 4.96223 20 10.4667V22.5C20 23.0523 19.5523 23.5 19 23.5H14.6154H9.23076H0.999999C0.447714 23.5 0 23.0523 0 22.5V17.3667V13.9167V10.4667ZM1.53846 17.3667V20.9667C1.53846 21.519 1.98618 21.9667 2.53846 21.9667H6.6923C7.24459 21.9667 7.69231 21.519 7.69231 20.9667V17.3667C7.69231 15.673 6.31472 14.3 4.61539 14.3C2.91604 14.3 1.53846 15.673 1.53846 17.3667ZM10.2308 21.9667C9.67848 21.9667 9.23076 21.519 9.23076 20.9667V17.3667C9.23076 14.8262 7.1644 12.7667 4.61539 12.7667C3.44097 12.7667 2.36901 13.2038 1.5544 13.9238C1.54822 13.9293 1.53846 13.9249 1.53846 13.9167C1.53846 10.741 4.12143 8.16667 7.30769 8.16667C10.4939 8.16667 13.0769 10.741 13.0769 13.9167V20.9667C13.0769 21.519 12.6292 21.9667 12.0769 21.9667H10.2308ZM18.4615 20.9667C18.4615 21.519 18.0138 21.9667 17.4615 21.9667H15.6154C15.0631 21.9667 14.6154 21.519 14.6154 20.9667V13.9167C14.6154 9.8942 11.3436 6.63333 7.30769 6.63333C6.28206 6.63333 5.30577 6.84392 4.41999 7.22408C3.49152 7.62256 2.27011 6.88584 2.80392 6.028C4.29599 3.6302 6.96089 2.03333 10 2.03333C14.6732 2.03333 18.4615 5.80907 18.4615 10.4667V20.9667Z"
                                fill="#121212" />
                        </svg>
                    </div>
                </div>
                <div class="col-4" lang="ar" dir="rtl">
                    <h1 class="heading mb-0 pb-0 mx-0"> إتـفـاقــيـــــــــة تأجيـــر مـوقــــع</h1>
                    <h2 class="text-gray">انتاج/صناعة محتوى</h2>
                </div>

            </div>
            <div class="row mt-2 align-items-center mt-3">
                <div class="col-3">
                    <div class="text"><b>Booking number</b></div>
                </div>
                <div class="col-6">
                    <input value="{{ $booking_id }}" type="text" id="booking_num" class="w-100 input2">
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
                        <input value="{{ $confirmation_date }}" type="text" id="agreement_date" class="input ms-1 "
                            style="width: 140px;">، by
                        and between
                        <input value="{{ $guest_fullname }}" type="text" id="party_name" class="input w-100 mb-1">
                        <span class="w-700">(“Producer’)</span> and <input value="{{ $host_fullname }}" id="host_name"
                            type="text" class="input " style="width: 250px;"> <span class="w-700">(“Host”)</span>
                        for
                        Producer to use the <span class="w-700">Property</span> in the context of the <span
                            class="w-700">Project</span> in consideration of the rights
                        granted in
                        this Agreement, subject to its performance, and in furtherance of the mutual interest and the
                        financial value that Host confirms to have received.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        تم إبرام إتفاقية الموقع هذه <b>(“الاتفاقية”)</b> في <input value="{{ $confirmation_date }}"
                            id="agreement_date_ar" type="text" class="input" style="width: 140px;">، بين كل من
                        <input value="{{ $guest_fullname }}" type="text" id="party_name_ar" class="input"
                            style="width: 300px;">
                        <b>(“المُنتج”)</b> و
                        <input value="{{ $host_fullname }}" type="text" id="host_name_ar" class="input"
                            style="width:300px;"> <b>(“المُضيف”)</b>
                        ليستخدم
                        المنتج <b>العقار</b> في إطار <b>المشروع</b> نظيرًا للحقوق الممنوحة في هذه الاتفاقية، وبشرط
                        تنفيذها ، وتحقيقًا
                        للمصلحة المتبادلة والقيمة المالية التي يؤكد المُضيف استلامها .



                    </p>
                </div>
            </div>
            <div class="row mt-2 align-items-center mb-2">
                <div class="col-3">
                    <div class="text"><b>“Project”: </b></div>
                </div>
                <div class="col-6">
                    <input value="{{ $project_tilte }}" id="project_name" type="text" class="w-100 input2">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text"><b>“المشروع”: </b></div>
                </div>
            </div>
            <div class="row align-items-center mb-2">
                <div class="col-3">
                    <div class="text"><b>“Property”: </b></div>
                </div>
                <div class="col-6">
                    <input value="{{ $estate_title }}" id="property_name" type="text" class="w-100 input2">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text"><b>“العقار” او “الموقع” </b></div>
                </div>
            </div>
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
                    <h2 class="heading2">1. Preamble</h2>
                    <p class="text   ">
                        <span class="medium">1.1 The Host</span> has the legal right to manage the Property located at
                        the address mentioned
                        which the host has the right, power and authority to enter into this Agreement.
                    </p>
                    <p class="text   ">
                        <span class="medium">1.2 The Producer</span> wants to use the <span
                            class="medium">Property</span> in a visual/audio media Project during
                        the Term for
                        a total amount of <input value="{{ $host_payout_total }}" id="amount_1_2" type="text"
                            class="input" style="width: 100px;"> SAR
                        and detailed in
                        Appendix No (1).
                    </p>
                </div>
                <div class="col-6">
                    <h2 class="heading2" lang="ar" dir="rtl">1. تمهيد</h2>
                    <p class="text-arabic" lang="ar" dir="rtl">
                        1.1 يملك المضيف الحق القانوني في إدارة العقار الواقع في العنوان المذكور ، حيث يتمتع المضيف بالحق
                        والسلطة والصلاحية لإبرام هذه الاتفاقية.

                    </p>
                    <p class="text-arabic" lang="ar" dir="rtl">
                        1.2 يرغب المنتِج في استخدام العقار في مشروع وسائط مرئية/صوتية خلال فترة العقد مقابل إجمالي مبلغ
                        <input value="{{ $host_payout_total }}" id="amount_1_2_ar" type="text" class="input"
                            style="width: 100px;"> ريال سعودي
                        موضح
                        بالتفاصيل في الملحق رقم
                        (1).
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <h2 class="heading2">Section 2: Terms and Conditions</h2>
                    <p class="text   ">
                        <span class="medium">2.1 Integration of Documents:</span>Both Producer and Host agree to comply
                        with and be legally
                        bound by the Terms of Service and Privacy Policy located on the Makanat website at
                        Makanat.com/terms , whether or not Producer or Host become registered users of the Makanat
                        services.
                    </p>
                </div>
                <div class="col-6">
                    <h2 class="heading2" lang="ar" dir="rtl">المادة 2: الشروط والأحكام</h2>
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.1 إدماج المستندات:</span> إدماج المستندات: يوافق كل من المنتج والمضيف
                        على
                        الامتثال بشروط
                        استخدام الخدمة والتي تشمل سياسات الإلغاء والموجودة على منصة مكانات عبر الموقع الإلكتروني
                        Makanat.com/terms ، سواء أصبح المنتج أو المضيف مستخدمين مسجلين في الموقع أم لا.
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
                    <p class="text   ">
                        <span class="medium">2.2 Permissions Granted:</span> During the Term agreed upon, the Host
                        grants to the Producer, its employees, equipment, assistants, affiliates, and agents the right
                        and permission to do the following: (a) Access the Location premises and enter the facility in a
                        manner that allows it to carry out media production-related activities; (b) Conduct photography,
                        sound recording, or videography; (c) Edit or broadcast the recording, publish or print
                        photographs in all media, during the work and until the expiration of the project and after its
                        expiration; and (d) Guarantee and prevent the exposure of danger to others during the Term and
                        its use of the Property.

                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.2 الصلاحيات الممنوحة</span>
                        خلال الفترة المتفق عليها، يمنح المضيف للمنتج ، وموظفيه ، ومعداته ، ومساعديه ، والشركات التابعة
                        له ، ووكلائه الحق والتصريح للقيام بما يلي: (أ) دخول الموقع والبقاء فيه وشغله بطريقة تسمح بالقيام
                        بأنشطة الإنتاج فيما يتعلق بالمشروع. (ب) إجراء التصوير الفوتوغرافي أو تسجيل الصوت أو الفيديو. (ج)
                        تحرير أو بث التسجيل ونشر أو طباعة الصور الفوتوغرافية في جميع وسائط الإعلام وأثناء العمل وحتى
                        انتهاء المشروع وبعد انتهائه. (د) ضمان سلامة ومنع تعرض الآخرين للخطر خلال فترة العمل واستغلال
                        العقار.

                    </p>
                </div>
            </div>


            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.3 Media Content Controls:</span> The Producer shall abide by the
                        controls
                        of media content stipulated in Article (5) of the Saudi audiovisual media law and the publishing
                        controls contained in the Saudi printing and publication law which includes obtaining all
                        necessary permits and licenses prior to the start of production.


                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.3 ضوابط المحتوى الإعلامي:</span>
                        يلتزم المنتج بالضوابط المتعلقة بمحتوى الوسائط المنصوص عليها في المادة (5) من قانون الإعلام
                        المرئي والمسموع السعودي وضوابط النشر الواردة في قانون المطبوعات والنشر السعودي. ويشمل ذلك الحصول
                        على جميع التصاريح والرخص اللازمة قبل البدء بالإنتاج.


                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <span class="medium">2.4 Rules:</span><br>
                    <ul class="ps-4">
                        <li class="text ">Producer must provide the Host with a detailed plan of their production,
                            including the dates and times of use, the number of people involved, and any special
                            equipment or needs.</li>
                        <li class="text ">
                            Producer is required to adhere to the agreed Term.
                        </li>
                        <li class="text ">
                            Producer must abide to the Host's Space Rules for the use of the Property specified in the
                            appendix (1).</li>
                        <li class="text ">Producer are not allowed to leave any equipment, clothing, or personal
                            belongings in any area of the premises or in the corridors. If any equipment is left it will
                            be abandoned and disposed of without compensation.</li>
                    </ul>
                </div>
                <div class="col-6" lang="ar" dir="rtl">
                    <span class="medium">2.4 القواعد:</span><br>
                    <ul class="ps-0 pe-4" lang="ar" dir="rtl">
                        <li class="text-arabic">يجب على المنتج تقديم خطة تفصيلية للإنتاج إلى المضيف، تتضمن تواريخ
                            وأوقات
                            الاستخدام ، وعدد الأشخاص المشاركين، وأي معدات أو احتياجات خاصة.</li>
                        <li class="text-arabic">يجب على المنتج الالتزام بالفترة المتفق عليها.</li>
                        <li class="text-arabic">يجب على المنتج الامتثال لجميع القواعد واللوائح والإجراءات المتعلقة بتلك
                            الاستضافة والمذكورة في الملحق رقم (1).</li>
                        <li class="text-arabic">لا يُسمح للمنتج بترك أي معدات أو ملابس أو أغراض شخصية في أي منطقة من
                            الموقع او المبنى أو في الممرات. إذا تم ترك أي معدات، سيتم اعتبار هذه المعدات مهجورة وسيتم
                            التخلص منها دون تعويض.</li>
                    </ul>

                </div>
            </div>


            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.5 Payment</span> Producer shall pay Host a total amount of
                        <input value="{{ $host_payout_total }}" id="amount_2_5" type="text"
                            class="input border-danger " style="width: 130px !important;">SAR for the use
                        of the Property during the Term.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.5 الدفع:</span>
                        يدفع المنتج للمضيف مبلغًا إجماليًا قدره
                        <input value="{{ $host_payout_total }}" id="amount_2_5_ar" type="text"
                            class="input border-danger " style="width: 130px !important;"> ريال سعودي
                        مقابل استخدام الموقع خلال المدة المتفق عليها.

                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.6 Location Handover:</span>
                        The Host is committed to handover the Property to the Producer at the agreed Term.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.6 تسليم الموقع: </span>
                        يلتزم المضيف بتسليم الموقع للمنتج خلال الفترة المتفق عليها ، لاستخدام العقار في إطار المشروع.
                    </p>
                </div>
            </div>
            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.7 Overtime fee: </span>
                        In the event that the Producer requests an increase in the Term, and after the Host approval,
                        Producer is obligated to pay the overtime fees defined as the Hourly Rate multiplied by 1.5 for
                        any property and/or site managers.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.7 رسوم ساعات العمل الاضافي: </span>
                        في حالة طلب المنتج زيادة في الفترة ، وبعد موافقة المستضيف ، سيتم تحصيل رسوم مقابل استخدام اوقات
                        العمل الإضافي تساوي قيمة الساعة الاضافية الواحدة مضروبًا في 1.5 لرسوم العقار واجور مدير الموقع.
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
                    <h2 class="medium text">2.8 Cancellation Policy:</h2>
                </div>
                <div class="col-6">
                    <h2 class="medium text-arabic" lang="ar" dir="rtl">2.8 سياسات الإلغاء:</h2>
                </div>
            </div>

            <div class="row bg-row row-border pt-2 mb-1 pb-2">
                <div class="col-6">
                    <p class="text  pb-0 mb-0 ">
                        <span class="medium">2.8.1 Makanat grace period:</span> Full refund for Bookings cancelled
                        within 24 hours from booking confirmation but no later than 48 hours prior to the Shoot start
                        time.

                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        <span class="medium">2.8.1 فترة السماح الخاصة بمكانات: </span>
                        سترداد كامل قيمة الحجز بشرط أن يقع الإلغاء خلال (24) ساعة من تاريخ استلام تأكيد الحجز وبما لا
                        يقل عن (48) ساعة من التاريخ المقرر لبدء التصوير.

                    </p>
                </div>
            </div>

            <div class="row bg-row row-border pt-2 mb-1 pb-2">
                <div class="col-6">
                    <p class="text  pb-0 mb-0 ">
                        <span class="medium">2.8.2 Space cancellation policy:</span>
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
                        <span class="medium">2.8.2 سياسة الإلغاء الخاصة بالمساحة: </span>

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
                        2.8.3 In the event of cancellation of bookings by the Host, penalties may be imposed against him
                        and he may be liable for costs, expenses and other losses. In the event of cancellation of
                        bookings without excuse, the Host agrees to pay a penalty of 15% of the total booking price,
                        which represents the costs of evacuating the Producer to another location. </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic mb-0 pb-0" lang="ar" dir="rtl">
                        2.8.3 في حالة إلغاء الحجوزات من قبل المضيف، فإنه قد يتم فرض الغرامات ضده كما قد يكون مسؤولاً عن
                        التكاليف والنفقات والخسائر الأخرى. في حالة إلغاء الحجوزات بدون عذر ، يوافق المضيف على دفع غرامة
                        قدرها 15% من السعر الإجمالي للحجز والتي تمثل تكاليف إخلاء المنتج لموقع آخر.
                    </p>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.9 Force Majeure:</span> If Producer's use of the Property is prevented
                        or
                        hampered by an event beyond Producer's control (including, but not limited to, weather-related
                        delays), Producer shall have the right to use the Property without any additional charge for an
                        amount of additional time equal to the time that was not used due to the Force Majeure event,
                        commencing at a mutually agreeable time following the end of the Force Majeure Event.



                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.9 القوة القاهرة:</span>
                        إذا تم منع أو إعاقة استخدام المنتج للموقع بسبب حدث خارج عن سيطرة المنتج (بما في ذلك ، على سبيل
                        المثال لا الحصر ، التأخيرات الناتجة عن الاحوال الجوية) ، فإنه يحق للمُنتج عندئذٍ – وبدون أي
                        تكلفة إضافية – استخدام واستغلال الموقع المشار إليه لفترة زمنية إضافية تساوي الوقت الضائع بسبب
                        حالة القوة القاهرة ، على أن تبدأ هذه المهلة الإضافية في وقت يتفق عليه كلا الطرفين بعد انتهاء حدث
                        القوة القاهرة.


                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.10 Intellectual Property Rights:</span> Host acknowledges that all
                        rights
                        of every kind in such recordings in all manners, formats, and media now known or hereafter
                        devised (including, without limitation, all copyrights therein and all renewals, extensions, and
                        restoration of said copyrights) shall be solely owned throughout the universe and in perpetuity
                        by Producer.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.10 حقوق الملكية الفكرية:</span>يقر المضيف بأن جميع الحقوق من أي نوع في
                        مثل هذه التسجيلات وبأي طرق وأشكال ووسائط معروفة الآن أو التي يتم ابتكارها في المستقبل (بما في
                        ذلك ، على سبيل المثال لا الحصر ، جميع حقوق التأليف والنشر فيها وجميع التجديدات والتمديدات
                        واستعادة حقوق التأليف والنشر المذكورة) ستكون مملوكة ملكية حصرية في جميع أنحاء العالم وإلى الأبد
                        من قبل المنتج.

                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.11 Legal Compliance</span>
                        The Producer must follow all applicable laws and regulations in Saudi Arabia and assumes the
                        legal and financial responsibility for producing any content that may violate the regulations of
                        the Kingdom.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.11 الامتثال القانوني:</span>
                        يجب على المنتج الامتثال لجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية ،
                        بالإضافة إلى ذلك ، يوافق المنتج على تحمل المسؤولية القانونية والمالية عن إنتاج أي محتوى قد ينتهك
                        قوانين المملكة.
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

            <div class="row mt-2">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.12 Liability, Claims and Compensation:</span> The Producer, while taking
                        reasonable care to prevent any damage to the Property or its contents during use, unless general
                        liability insurance is provided in favor of the Host, shall indemnify the Host for any physical
                        damage to the Property or its contents. In addition, the Producer agrees to indemnify any party
                        affected by any damage or injury resulting from the use of the Property, provided that the
                        damage is reported within 48 hours of its occurrence or the Producer is evicted from the
                        Property, whichever comes first. In the event of any proceeding or claim arising out of or
                        relating to this Agreement, the use of the Property, or the use or exploitation of any audio or
                        visual recordings made on or from the Property, the Host's sole remedy shall be to seek monetary
                        damages.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.12 المسؤولية والمطالبات والتعويض:</span>
                        يلتزم المنتج ، مع اتخاذ عناية معقولة لمنع أي أضرار بالموقع أو محتوياته أثناء الاستخدام ، ما لم
                        يتم توفير تأمين ضد المسؤولية العامة لصالح المضيف ، بتعويض المضيف عن أي أضرار مادية بالموقع أو
                        محتوياته. بالإضافة إلى ذلك ، يوافق المنتج على التعويض القانوني لأي طرف يتأثر بأضرار أو إصابات
                        نجمت عن استخدام الموقع ، شريطة إبلاغ الضرر خلال 48 ساعة من حدوثه أو إخلاء المنتج من الموقع ،
                        أيهما يأتي أولاً. في حالة وجود أي إجراء أو مطالبة تنشأ عن أو تتعلق بهذه الاتفاقية ، أو استخدام
                        العقار ، أو استخدام أو استغلال أي تسجيلات صوتية أو مرئية تم إجراؤها على العقار أو منه ، فإن
                        اللجوء الوحيد للمضيف هو المطالبة بالتعويض النقدي.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.13 Notifications:</span> All communications between the the Host and the
                        Producer must be made through Makanat.com
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.13 الإشعارات:</span>
                        يجب تقديم جميع الإخطارات بين المنتج والمضيف من خلال قناة التواصل المباشر عبر منصة الحجز
                        Makanat.com

                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.14 Agreement Duration:</span>
                        This agreement expires at the end of its Term unless the Producer requests an additional period,
                        and in all cases, it ends at the expiration of the work of the product Project.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.14 مدة الاتفاقية:</span>
                        تنتهي هذه الاتفاقية في نهاية الفترة المشار إليها ما لم يطلب المنتج ساعات عمل إضافية ، وفي جميع
                        الحالات ، تنتهي عند انتهاء عمل مشروع المنتج.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.15 Governing Law:</span>
                        This agreement shall be governed by the laws of Saudi Arabia, with Saudi courts having exclusive
                        jurisdiction.
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.15 القانون الواجب التطبيق:</span>
                        تخضع هذه الاتفاقية وتفسر وفقًا لقوانين المملكة العربية السعودية، وتتمتع المحاكم السعودية بالسلطة
                        القضائية لنظر أي نزاع أو خلاف ينشأ عنها أو فيما يتعلق بها.
                    </p>
                </div>
            </div>


            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.16 Bilingual Agreement:</span>
                        This agreement is made in the Arabic and English languages, with the Arabic language prevailing
                        in case of conflict.
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.16 اللغة السائدة:</span>
                        تم تحرير هذه الإتفاقية باللغتين العربية والانجليزية وفي حالة وجود تعارض بين النص العربي والنص
                        الإنجليزي يتم ترجيح النص العربي.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">2.17</span>
                        This contract is made in two identical copies, signed by both parties. Each copy has the same
                        legal force, and each party has received a copy.

                    </p>
                </div>
                <div class="col-6">
                    <p class="text-arabic" lang="ar" dir="rtl">
                        <span class="medium">2.17</span>
                        حرر هذا العقد من ثلاث نسخ متطابقه وقعتا من كلا الطرفين، ولكل نسخة الدرجة نفسها من الحجية وقد
                        تسلم كل طرف نسخة منه.
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="box box2">
                        <div class="d-flex justify-content-between align-items-center procedure-header px-2 py-1">
                            <p class="mb-0 pb-0">Producer:</p>
                            <!-- <input id="producer_name" type="text" class="input2-box input2  "> -->
                            <p class="mb-0 pb-0 text-end " lang="ar" dir="rtl">المـنـتــج</p>
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
                            <p class="mb-0 pb-0 text-arbic text-end" lang="ar" dir="rtl">المسمى الوظيفي:
                            </p>
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
                    <div class="text medium">Shoot Date</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $checkin_date }}" id="shoot_date" type="text" class="w-100 input2"
                        placeholder="-">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">تاريخ التصوير</div>
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
                    <div class="text medium">Hourly Rate</div>
                </div>
                <div class="col-4 mx-auto ">
                    <input value="{{ $hourly_rate }}" id="hourly_rate" type="text" class="w-100 input2"
                        placeholder="SAR">
                </div>
                <div class="col-3" lang="ar" dir="rtl">
                    <div class="text medium">معدل سعر الساعة الواحدة</div>
                </div>
            </div>


            <div class="row mt-2">
                <div class="col-6">
                    <p class="text   ">
                        <span class="medium">Overtime rate</span>
                        is defined as the Hourly Rate multiplied by 1.5 plus time-and-a-half for any property and/or
                        site managers.

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
    <script src="{{ asset('js/location-pdf.js') }}"></script>

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
