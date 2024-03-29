var pdf;

function generatePDF() {
    window.jsPDF = window.jspdf.jsPDF;
    pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        // lineHeight: 1.5
    });

    pdf.setProperties({
        title: "Location Agreement"
    })

    // Top:50px
    // Bottom:40px
    // Sides:55px

    var x = 55
    var y = 50

    function pxToMm(pxValue) {
        // Assuming 1 inch is approximately 25.4 mm
        // and 1 pixel is 1/96th of an inch in most standard displays
        const mmValue = pxValue * 25.4 / 96;
        return mmValue;
    }

    function mmToPx(mmValue, dpi = 96) {
        const pxValue = (mmValue / 25.4) * dpi;
        return pxValue;
    }

    function pxToPt(pxValue) {
        // Assuming 1 inch is equal to 72 points and 96 pixels in most standard displays
        const ptValue = pxValue * 72 / 96;
        return ptValue;
    }

    function getPageHeightInPx() {
        return mmToPx(pdf.internal.pageSize.height)
    }

    function getPageWidthInPx() {
        return mmToPx(pdf.internal.pageSize.width)
    }

    function getTextWidth(text) {
        // Text width in mm
        return (pdf.getStringUnitWidth(text) * pdf.getFontSize()) / (72 / 25.6)
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function isEnglishText(text) {

        // Regular expressions to match English and Arabic characters
        var englishRegex = /^[a-zA-Z0-9\s.,;:'"!?()-]+$/;

        // Check if the input text matches English or Arabic
        if (englishRegex.test(text)) {
            return true;
        }

        return false;
    }

    function isEnglishText2(text) {

        // Regular expressions to match English and Arabic characters
        var englishRegex = /^[a-zA-Z0-9\s.,;:'"!?()-]+$/;
        var words = text.split(" ");

        var count = 0;
        for (var i = 0; i < 10; i++) {
            var word = words[getRandomNumber(0, words.length)];

            if (englishRegex.test(word)) {
                count++;

                if (count >= 3) {
                    return true;
                }
            }
        }

        return false;
    }

    const addFooter = function () {
        pdf.setFontSize(pxToPt(12))
        pdf.setFont('IBMPlexSansArabic-Regular', 'normal')

        pdf.setTextColor("#000000")
        pdf.text('Location Agreement | اتفاقية موقع', pxToMm(x), pxToMm(getPageHeightInPx() - 40))
        pdf.text("Page " + pdf.getCurrentPageInfo().pageNumber.toString() + " of 5", pxToMm(getPageWidthInPx() - x - 70), pxToMm(getPageHeightInPx() - 40))
    }

    addFooter()

    pdf.setFillColor('#C4EED7')
    pdf.roundedRect(pxToMm(x), pxToMm(y), pxToMm(230), pxToMm(36), pxToMm(9), pxToMm(9), 'F')

    pdf.setTextColor('#000000')
    pdf.setFontSize(pxToPt(21))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('Location Agreement', pxToMm(x + 20), pxToMm(y + 25))

    pdf.addImage('images/logo.png', 'PNG', pxToMm(getPageWidthInPx() / 2 - 15), pxToMm(y + 2.5), pxToMm(30), pxToMm(34))

    pdf.setFillColor('#C4EED7')
    pdf.roundedRect(pxToMm(getPageWidthInPx() - x - 230), pxToMm(y), pxToMm(230), pxToMm(36), pxToMm(9), pxToMm(9), 'F')

    pdf.text('إتـفـاقــيـــــــــة تأجيـــر مـوقــــع', pxToMm(getPageWidthInPx() - x - 205), pxToMm(y + 25))

    y += 60
    pdf.setFont('IBMPlexSansArabic-Bold', 'normal')
    pdf.setTextColor('#8C8C8C')
    pdf.setFontSize(pxToPt(18))
    pdf.text('Production', pxToMm(x), pxToMm(y))

    pdf.text('انتاج/صناعة محتوى', pxToMm(getPageWidthInPx() - x - 140), pxToMm(y))

    y += 50
    pdf.setTextColor('#000000')
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text('Booking number', pxToMm(x), pxToMm(y))

    pdf.text('رقم الحجز', pxToMm(getPageWidthInPx() - x - 60), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text($("#booking_num").val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($("#booking_num").val()) / 2))) + 2, pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 80), pxToMm(y - 20), pxToMm(300), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    y += 60
    pdf.setDrawColor('#000000')
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('This Location Agreement', pxToMm(x), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“Agreement”)', pxToMm(x + 155), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('is entered into', pxToMm(x + 250), pxToMm(y))

    pdf.text('تم إبرام إتفاقية الموقع هذه', pxToMm(getPageWidthInPx() - x - 140), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“الاتفاقية”)', pxToMm(getPageWidthInPx() - x - 208), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('في', pxToMm(getPageWidthInPx() - x - 228), pxToMm(y))

    pdf.setLineDashPattern([0.5, 0.7])
    pdf.text($('#agreement_date_ar').val(), pxToMm(getPageWidthInPx() - x - 230) - getTextWidth($('#agreement_date_ar').val()) - 2, pxToMm(y - 3))
    pdf.line(pxToMm(getPageWidthInPx() - x - 320), pxToMm(y), pxToMm(getPageWidthInPx() - x - 230), pxToMm(y), 'D')

    y += 20
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('as of', pxToMm(x), pxToMm(y))
    pdf.line(pxToMm(x + 40), pxToMm(y), pxToMm(x + 220), pxToMm(y), 'D')
    pdf.text($('#agreement_date').val(), pxToMm(x + 40) + 2, pxToMm(y - 3))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(', by and between', pxToMm(x + 233), pxToMm(y))

    pdf.text('بين كل من', pxToMm(getPageWidthInPx() - x - 60), pxToMm(y))

    pdf.text($('#party_name_ar').val(), pxToMm(getPageWidthInPx() - x - 70) - getTextWidth($('#party_name_ar').val()) - 2, pxToMm(y - 3))
    pdf.line(pxToMm(getPageWidthInPx() - x - 320), pxToMm(y), pxToMm(getPageWidthInPx() - x - 70), pxToMm(y), 'D')

    y += 20
    pdf.text($('#party_name').val(), pxToMm(x) + 2, pxToMm(y - 3))
    pdf.line(pxToMm(x), pxToMm(y), pxToMm(x + 340), pxToMm(y), 'D')

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“المُنتج”)', pxToMm(getPageWidthInPx() - x - 60), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('و', pxToMm(getPageWidthInPx() - x - 70), pxToMm(y))

    pdf.text($('#host_name_ar').val(), pxToMm(getPageWidthInPx() - x - 75) - getTextWidth($('#host_name_ar').val()) - 2, pxToMm(y - 3))
    pdf.line(pxToMm(getPageWidthInPx() - x - 320), pxToMm(y), pxToMm(getPageWidthInPx() - x - 75), pxToMm(y), 'D')

    y += 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“Producer’)', pxToMm(x), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('and', pxToMm(x + 82), pxToMm(y))
    pdf.text($('#host_name').val(), pxToMm(x + 110) + 2, pxToMm(y - 3))
    pdf.line(pxToMm(x + 110), pxToMm(y), pxToMm(x + 340), pxToMm(y), 'D')

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“المُضيف”)', pxToMm(getPageWidthInPx() - x - 60), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('ليستخدم المنتج', pxToMm(getPageWidthInPx() - x - 170), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('العقار', pxToMm(getPageWidthInPx() - x - 210), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('في إطار', pxToMm(getPageWidthInPx() - x - 260), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('المشروع', pxToMm(getPageWidthInPx() - x - 320), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('نظيرًا للحقوق', pxToMm(getPageWidthInPx() - x - 60), pxToMm(y))
    pdf.text('الممنوحة في هذه الاتفاقية، وبشرط تنفيذها،وتحقيقًا', pxToMm(getPageWidthInPx() - x - 320), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('(“Host”)', pxToMm(x), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('for Producer to use the', pxToMm(x + 55), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('Property', pxToMm(x + 197), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('in the context', pxToMm(x + 255), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('of the', pxToMm(x), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('Project', pxToMm(x + 45), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('in consideration of the rights granted in', pxToMm(x + 100), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('this Agreement, subject to its performance, and in', pxToMm(x), pxToMm(y), { charSpace: 0.2 })

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('furtherance of the mutual interest and the financial', pxToMm(x), pxToMm(y), { charSpace: 0.15 })

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('value that Host confirms to have received.', pxToMm(x), pxToMm(y), { charSpace: 0.15 })

    y -= 60
    pdf.text('.' + 'للمصلحة المتبادلة والقيمة المالية التي يؤكد المُضيف استلامها', pxToMm(getPageWidthInPx() - x - 300), pxToMm(y))

    y += 120
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text("“Project”:", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#project_name').val())) {
    //     pdf.text($('#project_name').val(), pxToMm(getPageWidthInPx() / 2 - x - 80) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#project_name').val(), pxToMm(getPageWidthInPx() / 2 - x - 80) + pxToMm(300) - 2 - getTextWidth($('#project_name').val()), pxToMm(y - 3))
    // }
    pdf.text($('#project_name').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#project_name').val()) / 2))) + 2, pxToMm(y - 3))

    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 80), pxToMm(y - 20), pxToMm(300), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('“المشروع”:', pxToMm(getPageWidthInPx() - x - 70), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text("“Property”:", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#property_name').val())) {
    //     pdf.text($('#property_name').val(), pxToMm(getPageWidthInPx() / 2 - x - 80) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#property_name').val(), pxToMm(getPageWidthInPx() / 2 - x - 80) + pxToMm(300) - 2 - getTextWidth($('#property_name').val()), pxToMm(y - 3))
    // }
    pdf.text($('#property_name').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#property_name').val()) / 2))) + 2, pxToMm(y - 3))


    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 80), pxToMm(y - 20), pxToMm(300), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text('“العقار” او “الموقع”', pxToMm(getPageWidthInPx() - x - 120), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text("Located at", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#located_at').val())) {
    //     pdf.text($('#located_at').val(), pxToMm(getPageWidthInPx() / 2 - x - 150) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#located_at').val(), pxToMm(getPageWidthInPx() / 2 - x - 150) + pxToMm(430) - 2 - getTextWidth($('#located_at').val()), pxToMm(y - 3))
    // }
    pdf.text($('#located_at').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#located_at').val()) / 2))) + 2, pxToMm(y - 3))


    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 150), pxToMm(y - 20), pxToMm(430), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.text('الواقع في عنوان', pxToMm(getPageWidthInPx() - x - 92), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.setFontSize(pxToPt(15))
    pdf.text("“Term”:", pxToMm(x), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("Date", pxToMm(x + 220), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#date').val())) {
    //     pdf.text($('#date').val(), pxToMm(getPageWidthInPx() / 2 - 60) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#date').val(), pxToMm(getPageWidthInPx() / 2 - 60) + pxToMm(150) - 2 - getTextWidth($('#date').val()), pxToMm(y - 3))
    // }
    pdf.text($('#date').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#date').val()) / 2))) + 2, pxToMm(y - 3))


    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - 60), pxToMm(y - 20), pxToMm(150), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(":" + 'الفترة”', pxToMm(getPageWidthInPx() - x - 50), pxToMm(y))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text('تبدأ في تاريخ', pxToMm(getPageWidthInPx() - x - 220), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("Start time", pxToMm(x + 185), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#start_time').val())) {
    //     pdf.text($('#start_time').val(), pxToMm(getPageWidthInPx() / 2 - 60) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#start_time').val(), pxToMm(getPageWidthInPx() / 2 - 60) + pxToMm(150) - 2 - getTextWidth($('#start_time').val()), pxToMm(y - 3))
    // }
    pdf.text($('#start_time').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#start_time').val()) / 2))) + 2, pxToMm(y - 3))


    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - 60), pxToMm(y - 20), pxToMm(150), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.text('زمن الدخول', pxToMm(getPageWidthInPx() - x - 220), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("End time", pxToMm(x + 190), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#end_time').val())) {
    //     pdf.text($('#end_time').val(), pxToMm(getPageWidthInPx() / 2 - 60) + 2, pxToMm(y - 3))
    // } else {
    //     pdf.text($('#end_time').val(), pxToMm(getPageWidthInPx() / 2 - 60) + pxToMm(150) - 2 - getTextWidth($('#end_time').val()), pxToMm(y - 3))
    // }
    pdf.text($('#end_time').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#end_time').val()) / 2))) + 2, pxToMm(y - 3))


    pdf.setLineDashPattern()
    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - 60), pxToMm(y - 20), pxToMm(150), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.text('زمن الخروج', pxToMm(getPageWidthInPx() - x - 220), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(18))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("1. Preamble", pxToMm(x), pxToMm(y))

    pdf.text("تمهيد", pxToMm(getPageWidthInPx() - x - 70), pxToMm(y))
    pdf.text(".1", pxToMm(getPageWidthInPx() - x - 20), pxToMm(y))

    y += 30
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("1.1 The Host", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("has the legal right to manage the Property", pxToMm(x + 82), pxToMm(y), { charSpace: 0 })

    y += 20
    pdf.text("located at the address mentioned which the host has", pxToMm(x), pxToMm(y), { charSpace: 0.08 })

    y += 20
    pdf.text("right, power and authority to enter into this Agreement.", pxToMm(x), pxToMm(y))

    y -= 40
    pdf.text("يملك المضيف الحق القانوني في إدارة العقار الواقع في", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.1 })
    pdf.text("1.1", pxToMm(getPageWidthInPx() - x - 25), pxToMm(y))

    y += 20
    pdf.text("العنوان المذكور ، حيث يتمتع المضيف" + "بالحق والسلطة", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), { charSpace: 0.3 })

    y += 20
    pdf.text(" لإبرام هذه الاتفاقية", pxToMm(getPageWidthInPx() - x - 110), pxToMm(y), { charSpace: 0.1 })

    pdf.text(".", pxToMm(getPageWidthInPx() - x - 112), pxToMm(y))

    y += 30
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("1.2 The Producer", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("wants to use the Property in a visual/", pxToMm(x + 110), pxToMm(y), { charSpace: 0.03 })

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("audio media Project during the Term for a total amount", pxToMm(x), pxToMm(y), { charSpace: 0.03 })

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("of ", pxToMm(x), pxToMm(y), { charSpace: 0.03 })

    pdf.text($('#amount_1_2').val(), pxToMm(x + 20) + 2, pxToMm(y - 3))
    pdf.setLineDashPattern([0.5, 0.7])
    pdf.setDrawColor('#000000')
    pdf.line(pxToMm(x + 20), pxToMm(y), pxToMm(x + 100), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("and detailed in Appendix No (1).", pxToMm(x + 110), pxToMm(y), { charSpace: 0.03 })

    y -= 40
    pdf.text("/يرغب المنتِج في استخدام العقار في مشروع وسائط مرئية", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.02 })
    pdf.text("1.2", pxToMm(getPageWidthInPx() - x - 25), pxToMm(y))

    y += 20
    pdf.text("صوتية خلال فترة العقد مقابل إجمالي مبلغ", pxToMm(getPageWidthInPx() - x - 220), pxToMm(y), { charSpace: 0.04 })
    pdf.text($('#amount_1_2_ar').val(), pxToMm(getPageWidthInPx() - x - 225) - getTextWidth($('#amount_1_2_ar').val()) - 2, pxToMm(y - 3))
    pdf.line(pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), pxToMm(getPageWidthInPx() - x - 225), pxToMm(y))

    y += 20
    pdf.text(".(1)" + "موضح بالتفاصيل في الملحق رقم", pxToMm(getPageWidthInPx() - x - 195), pxToMm(y), { charSpace: 0.04 })

    y += 40
    pdf.setFontSize(pxToPt(18))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Section 2: Terms and Conditions", pxToMm(x), pxToMm(y))

    pdf.text("المادة 2: الشروط والأحكام", pxToMm(getPageWidthInPx() - x - 190), pxToMm(y))

    y += 30
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("2.1 Integration of Documents:", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("Both Producer and Host ", pxToMm(x + 190), pxToMm(y), { charSpace: 0.03 })

    y += 20
    pdf.text("agree to comply with and be legally bound by the Terms", pxToMm(x), pxToMm(y),)

    y += 20
    pdf.text("of Service and Privacy Policy located on the Makanat", pxToMm(x), pxToMm(y), { charSpace: 0.1 })

    y += 20
    pdf.text("website at Makanat.com/terms , whether or not", pxToMm(x), pxToMm(y), { charSpace: 0.29 })

    y += 20
    pdf.text("Producer or Host become registered users of the", pxToMm(x), pxToMm(y), { charSpace: 0.24 })

    y += 20
    pdf.text("Makanat services.", pxToMm(x), pxToMm(y), { charSpace: 0.1 })

    y -= 100
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(":إدماج المستندات", pxToMm(getPageWidthInPx() - x - 125), pxToMm(y))
    pdf.text("2.1", pxToMm(getPageWidthInPx() - x - 25), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يوافق كل من المنتج والمضيف على", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.1 })

    y += 20
    pdf.text("الامتثال بشروط استخدام الخدمة والتي تشمل سياسات الإلغاء", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.03 })

    y += 20
    pdf.text("والموجودة على منصة مكانات عبر الموقع الإلكتروني", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.35 })

    y += 20
    pdf.text(", Makanat.com/terms", pxToMm(getPageWidthInPx() - x - 148), pxToMm(y), { charSpace: 0.2 })
    pdf.text("سواء أصبح المنتج أو المضيف", pxToMm(getPageWidthInPx() - x - 315), pxToMm(y), { charSpace: 0.1 })

    y += 20
    pdf.text("مستخدمين مسجلين في الموقع أم لا", pxToMm(getPageWidthInPx() - x - 203), pxToMm(y), { charSpace: 0.1 })

    y += 0
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 207), pxToMm(y))

    pdf.addPage();
    addFooter()
    var x = 55
    var y = 50

    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.2 Permissions Granted:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 160), pxToMm(y), 'During the Term agreed upon,')

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    justify(pdf, 'the Host grants to the Producer, its employees, equipment, assistants, affiliates, and agents the right and permission to do the following: (a) Access the Location premises and enter the facility in a manner that allows it to carry out media production-related activities; (b) Conduct photography, sound recording, or videography; (c) Edit or broadcast the recording, publish or print photographs in all media, during the work and until the expiration of the project and after its expiration; and (d) Guarantee and prevent the exposure of danger to others during the Term and its use of the Property.', pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 52))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("الصلاحيات الممنوحة", pxToMm(getPageWidthInPx() - x - 145), pxToMm(y))
    pdf.text("2.2", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("خلال الفترة المتفق عليها، يمنح", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0.05 })

    y += 20
    justify(pdf, "المضيف للمنتج ، وموظفيه ، ومعداته ، ومساعديه ، والشركات التابعة له ، ووكلائه الحق والتصريح للقيام بما يلي: (أ) دخول الموقع والبقاء فيه وشغله بطريقة تسمح بالقيام بأنشطة الإنتاج فيما يتعلق بالمشروع. (ب) إجراء التصوير الفوتوغرافي أو تسجيل الصوت أو الفيديو. (ج) تحرير أو بث التسجيل ونشر أو طباعة الصور الفوتوغرافية في جميع وسائط الإعلام وأثناء العمل وحتى انتهاء المشروع وبعد انتهائه. (د) ضمان سلامة ومنع تعرض الآخرين للخطر خلال فترة العمل واستغلال العقار", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 90), 'rtl', false, true)

    y += 140
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 308), pxToMm(y))

    y += 120
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.3 Media Content Controls:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 180), pxToMm(y), 'The Producer shall abide', { charSpace: 0.12 })

    y += 20
    justify(pdf, 'by the controls of media content stipulated in Article (5) of the Saudi audiovisual media law and the publishing controls contained in the Saudi printing and publication law which includes obtaining all necessary permits and licenses prior to the start of production.', pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 52))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("ضوابط المحتوى الإعلامي", pxToMm(getPageWidthInPx() - x - 165), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 175), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.3", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يلتزم المنتج بالضوابط", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0.3 })

    y += 20
    justify(pdf, "المتعلقة بمحتوى الوسائط المنصوص عليها في المادة (5) من قانون الإعلام المرئي والمسموع السعودي وضوابط النشر الواردة في قانون المطبوعات والنشر السعودي. ويشمل ذلك الحصول على جميع التصاريح والرخص اللازمة قبل البدء بالإنتاج", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 90), 'rtl', false, true)

    y += 80
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 45), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.4 Rules:')

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("القواعد", pxToMm(getPageWidthInPx() - x - 75), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 85), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.4", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '\u2022 ')
    justify(pdf, 'Producer must provide the Host with a detailed plan of their production, including the dates and times of use, the number of people involved, and any special equipment or needs.', pxToMm(x + 18), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 70))

    pdf.text("\u2022 ", pxToMm(getPageWidthInPx() - x - 15), pxToMm(y), { charSpace: 0.3 })
    justify(pdf, "يجب على المنتج تقديم خطة تفصيلية للإنتاج إلى المضيف، تتضمن تواريخ وأوقات الاستخدام ، وعدد الأشخاص المشاركين، وأي معدات أو احتياجات خاصة", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 110), 'rtl', true)

    y += 40
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 225), pxToMm(y))

    y += 40
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '\u2022 ')
    justify(pdf, 'Producer is required to adhere to the agreed Term.', pxToMm(x + 18), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 70))

    pdf.text("\u2022 ", pxToMm(getPageWidthInPx() - x - 15), pxToMm(y), { charSpace: 0.3 })
    justify(pdf, "يجب على المنتج الالتزام بالفترة المتفق عليها", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 110), 'rtl', true)

    pdf.text(".", pxToMm(getPageWidthInPx() - x - 240), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '\u2022 ')
    justify(pdf, "Producer must abide to the Host's Space Rules for the use of the Property specified in the appendix (1).", pxToMm(x + 18), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 70))

    pdf.text("\u2022 ", pxToMm(getPageWidthInPx() - x - 15), pxToMm(y), { charSpace: 0.3 })
    justify(pdf, "يجب على المنتج الامتثال لجميع القواعد واللوائح والإجراءات المتعلقة بتلك الاستضافة والمذكورة في الملحق رقم", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 110), 'rtl', true)

    y += 40
    pdf.text(".(1)", pxToMm(getPageWidthInPx() - x - 100), pxToMm(y))

    y += 20
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '\u2022 ')
    justify(pdf, "Producer are not allowed to leave any equipment, clothing, or personal belongings in any area of the premises or in the corridors. If any equipment is left it will be abandoned and disposed of without compensation.", pxToMm(x + 18), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 70))

    y += 0
    pdf.text("\u2022 ", pxToMm(getPageWidthInPx() - x - 15), pxToMm(y), { charSpace: 0.3 })
    justify(pdf, "لا يُسمح للمنتج بترك أي معدات أو ملابس أو أغراض شخصية في أي منطقة من الموقع او المبنى أو في الممرات. إذا تم ترك أي معدات، سيتم اعتبار هذه المعدات مهجورة وسيتم التخلص منها دون تعويض", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 110), 'rtl', true)

    y += 60
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 230), pxToMm(y))

    y += 50
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.5 Payment')

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 85), pxToMm(y), 'Producer shall pay Host a total amount of', { charSpace: 0.03 })

    y += 20
    pdf.setLineDashPattern([0.5, 0.7])
    pdf.line(pxToMm(x), pxToMm(y), pxToMm(x + 170), pxToMm(y))
    pdf.text($('#amount_2_5').val(), pxToMm(x) + 2, pxToMm(y - 3))

    pdf.text(pxToMm(x + 175), pxToMm(y), 'for the use of the Property', { charSpace: 0.03 })

    y += 20
    pdf.text(pxToMm(x), pxToMm(y), 'during the Term.', { charSpace: 0.03 })

    y -= 40
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("الدفع", pxToMm(getPageWidthInPx() - x - 65), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 75), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.5", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يدفع المنتج للمضيف مبلغًا إجماليًا قدره", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0.2 })

    y += 20
    pdf.line(pxToMm(getPageWidthInPx() - x - 10), pxToMm(y), pxToMm(x + 540), pxToMm(y))
    pdf.text($('#amount_2_5_ar').val(), pxToMm(x + 675) - 2 - getTextWidth($('#amount_2_5_ar').val()), pxToMm(y - 3))

    pdf.text("مقابل استخدام الموقع خلال", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0.2 })

    y += 20
    pdf.text("المدة المتفق عليها", pxToMm(getPageWidthInPx() - x - 115), pxToMm(y), { charSpace: 0.2 })

    pdf.text(".", pxToMm(getPageWidthInPx() - x - 120), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.6 Location Handover:')

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 150), pxToMm(y), 'The Host is committed to', { charSpace: 0.43 })

    y += 20
    justify(pdf, "handover the Property to the Producer at the agreed Term.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 54))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("تسليم الموقع", pxToMm(getPageWidthInPx() - x - 110), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 120), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.6", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يلتزم المضيف بتسليم الموقع للمنتج", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0 })

    y += 20
    justify(pdf, "خلال الفترة المتفق عليها ، لاستخدام العقار في إطار المشروع", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 90), 'rtl', false, true)

    pdf.text(".", pxToMm(getPageWidthInPx() - x - 305), pxToMm(y))

    y += 60
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.7 Overtime fee:')

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 120), pxToMm(y), 'In the event that the Producer', { charSpace: 0.325 })

    y += 20
    justify(pdf, "requests an increase in the Term, and after the Host approval, Producer is obligated to pay the overtime fees defined as the Hourly Rate multiplied by 1.5 for any property and/or site managers.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 54))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("رسوم ساعات العمل الاضافي", pxToMm(getPageWidthInPx() - x - 185), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 195), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.7", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("في حالة طلب المنتج", pxToMm(getPageWidthInPx() - x - 310), pxToMm(y), { charSpace: 0 })

    y += 20
    justify(pdf, "زيادة في الفترة ، وبعد موافقة المستضيف ، سيتم تحصيل رسوم مقابل استخدام اوقات العمل الإضافي تساوي قيمة الساعة الاضافية الواحدة مضروبًا في 1.5 لرسوم العقار واجور مدير الموقع", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 90), 'rtl', false, true)

    y += 60
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 70), pxToMm(y))

    pdf.addPage();
    addFooter()
    var x = 55
    var y = 50

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#FFFAFA')
    pdf.roundedRect(pxToMm(x - 15), pxToMm(y - 25), pxToMm(getPageWidthInPx() - (x * 2) + 25), pxToMm(40), pxToMm(0.75), pxToMm(0.75), 'F')

    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.8 Cancellation Policy:')

    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("سياسات الإلغاء", pxToMm(getPageWidthInPx() - x - 120), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 126), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.8", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    y += 40

    pdf.setDrawColor('#E97878')
    pdf.setFillColor('#FFFAFA')
    pdf.setLineWidth(0.1)
    pdf.roundedRect(pxToMm(x - 15), pxToMm(y - 20), pxToMm(getPageWidthInPx() - (x * 2) + 25), pxToMm(95), pxToMm(0.75), pxToMm(0.75), 'DF')

    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.8.1 Makanat grace period:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 194), pxToMm(y), 'Full refund for Bookings')

    y += 20
    justify(pdf, "cancelled within 24 hours from booking confirmation but no later than 48 hours prior to the Shoot start time.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("فترة السماح الخاصة بمكانات", pxToMm(getPageWidthInPx() - x - 185), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 190), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.8.1", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("سترداد كامل قيمة", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.3 })


    y += 20
    justify(pdf, "الحجز بشرط أن يقع الإلغاء خلال (24) ساعة من تاريخ استلام تأكيد الحجز وبما لا يقل عن (48) ساعة من التاريخ المقرر لبدء .التصوير", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')


    var height = 0;

    var lines = pdf.splitTextToSize(cancellation_policy_en, pxToMm(getPageWidthInPx() / 2 - 56));
    var lineHeight = pdf.internal.getFontSize() / pdf.internal.scaleFactor + 2;
    var height_en = lines.length * lineHeight + 10;

    var lines = pdf.splitTextToSize(cancellation_policy_ar, pxToMm(getPageWidthInPx() / 2 - 80));
    var lineHeight = pdf.internal.getFontSize() / pdf.internal.scaleFactor + 2;
    var height_ar = lines.length * lineHeight + 10;

    if (height_en > height_ar) {
        height = height_en
    } else {
        height = height_ar
    }

    y += 80
    pdf.setDrawColor('#E97878')
    pdf.setFillColor('#FFFAFA')
    pdf.setLineWidth(0.1)
    pdf.roundedRect(pxToMm(x - 15), pxToMm(y - 20), pxToMm(getPageWidthInPx() - (x * 2) + 25), height, pxToMm(0.75), pxToMm(0.75), 'DF')

    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.8.2 Space cancellation policy:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // pdf.text(pxToMm(x + 200), pxToMm(y), 'Guests may cancel', { charSpace: 0.3 })

    y += 20
    justify(pdf, cancellation_policy_en, pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("سياسة الإلغاء الخاصة بالمساحة", pxToMm(getPageWidthInPx() - x - 200), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 210), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.8.2", pxToMm(getPageWidthInPx() - x - 30), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // pdf.text("يجوز للضيوف" + " " + "إلغاء", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.03 })


    y += 20
    justify(pdf, cancellation_policy_ar, pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += height + 40
    pdf.setDrawColor('#E97878')
    pdf.setFillColor('#FFFAFA')
    pdf.setLineWidth(0.1)
    pdf.roundedRect(pxToMm(x - 15), pxToMm(y - 15), pxToMm(getPageWidthInPx() - (x * 2) + 25), pxToMm(160), pxToMm(0.75), pxToMm(0.75), 'DF')

    y += 5
    pdf.setFontSize(pxToPt(13.5))
    justify(pdf, "2.8.3 In the event of cancellation of bookings by the Host, penalties may be imposed against him and he may be liable for costs, expenses and other losses. In the event of cancellation of bookings without excuse, the Host agrees to pay a penalty of 15% of the total booking price, which represents the costs of evacuating the Producer to another location.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y += 0
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    justify(pdf, "2.8.3 في حالة إلغاء الحجوزات من قبل المضيف، فإنه قد يتم فرض الغرامات ضده كما قد يكون مسؤولاً عن التكاليف والنفقات والخسائر الأخرى. في حالة إلغاء الحجوزات بدون عذر ، يوافق المضيف على دفع غرامة قدرها 15% من السعر الإجمالي للحجز والتي تمثل تكاليف إخلاء المنتج لموقع آخر", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 80
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 240), pxToMm(y))

    y += 90
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.9 Force Majeure:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 140), pxToMm(y), "If Producer's use of the property")

    y += 20
    justify(pdf, "is prevented or hampered by an event beyond Producer's control (including, but not limited to, weather-related delays), Producer shall have the right to use the Property without any additional charge for an amount of additional time equal to the time that was not used due to the Force Majeure event, commencing at a mutually agreeable time following the end of the Force Majeure Event.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("القوة القاهرة", pxToMm(getPageWidthInPx() - x - 90), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 100), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.9", pxToMm(getPageWidthInPx() - x - 20), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("إذا تم منع أو إعاقة استخدام" + " " + "المنتج" + " " + "للموقع", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0 })


    y += 20
    justify(pdf, "بسبب حدث خارج عن سيطرة المنتج (بما في ذلك ، على سبيل المثال لا الحصر ، التأخيرات الناتجة عن الاحوال الجوية) ، فإنه يحق للمُنتج عندئذٍ – وبدون أي تكلفة إضافية – استخدام واستغلال الموقع المشار إليه لفترة زمنية إضافية تساوي الوقت الضائع بسبب حالة القوة القاهرة ، على أن تبدأ هذه المهلة الإضافية في وقت يتفق عليه كلا الطرفين بعد انتهاء حدث القوة القاهرة", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 120
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 37), pxToMm(y))

    y += 60
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.10 Intellectual Property Rights:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 220), pxToMm(y), "Host acknowledges")

    y += 20
    justify(pdf, "that all rights of every kind in such recordings in all manners, formats, and media now known or hereafter devised (including, without limitation, all copyrights therein and all renewals, extensions, and restoration of said copyrights) shall be solely owned throughout the universe and in perpetuity by Producer.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("حقوق الملكية الفكرية", pxToMm(getPageWidthInPx() - x - 145), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 155), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.10", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يقر المضيف بأن جميع الحقوق", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0 })


    y += 20
    justify(pdf, "من أي نوع في مثل هذه التسجيلات وبأي طرق وأشكال ووسائط معروفة الآن أو التي يتم ابتكارها في المستقبل (بما في ذلك ، على سبيل المثال لا الحصر ، جميع حقوق التأليف والنشر فيها وجميع التجديدات والتمديدات واستعادة حقوق التأليف والنشر المذكورة) ستكون مملوكة ملكية حصرية في جميع أنحاء العالم وإلى الأبد من قبل المنتج", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 100
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 160), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.11 Legal Compliance:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 155), pxToMm(y), "The Producer must follow", { charSpace: 0.3 })

    y += 20
    justify(pdf, "all applicable laws and regulations in Saudi Arabia and assumes the legal and financial responsibility for producing any content that may violate the regulations of the Kingdom.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("الامتثال القانوني", pxToMm(getPageWidthInPx() - x - 120), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 130), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.11", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يجب على المنتج الامتثال لجميع", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.2 })


    y += 20
    justify(pdf, "القوانين واللوائح المعمول بها في المملكة العربية السعودية ، بالإضافة إلى ذلك ، يوافق المنتج على تحمل المسؤولية القانونية والمالية عن إنتاج أي محتوى قد ينتهك قوانين المملكة", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 40
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 270), pxToMm(y))

    pdf.addPage();
    addFooter()
    var x = 55
    var y = 50

    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.12 Liability, Claims and Compensation:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 255), pxToMm(y), "The Producer,", { charSpace: 0 })

    y += 20
    justify(pdf, "while taking reasonable care to prevent any damage to the Property or its contents during use, unless general liability insurance is provided in favor of the Host, shall indemnify the Host for any physical damage to the Property or its contents. In addition, the Producer agrees to indemnify any party affected by any damage or injury resulting from the use of the Property, provided that the damage is reported within 48 hours of its occurrence or the Producer is evicted from the Property, whichever comes first. In the event of any proceeding or claim arising out of or relating to this Agreement, the use of the Property, or the use or exploitation of any audio or visual recordings made on or from the Property, the Host's sole remedy shall be to seek monetary damages.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("المسؤولية والمطالبات والتعويض", pxToMm(getPageWidthInPx() - x - 205), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 220), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.11", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("لتزم المنتج ، مع", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.05 })


    y += 20
    justify(pdf, "اتخاذ عناية معقولة لمنع أي أضرار بالموقع أو محتوياته أثناء الاستخدام ، ما لم يتم توفير تأمين ضد المسؤولية العامة لصالح المضيف ، بتعويض المضيف عن أي أضرار مادية بالموقع أو محتوياته. بالإضافة إلى ذلك ، يوافق المنتج على التعويض القانوني لأي طرف يتأثر بأضرار أو إصابات نجمت عن استخدام الموقع ، شريطة إبلاغ الضرر خلال 48 ساعة من حدوثه أو إخلاء المنتج من الموقع ، أيهما يأتي أولاً. في حالة وجود أي إجراء أو مطالبة تنشأ عن أو تتعلق بهذه الاتفاقية ، أو استخدام العقار ، أو استخدام أو استغلال أي تسجيلات صوتية أو مرئية تم إجراؤها على العقار أو منه ، فإن اللجوء الوحيد للمضيف هو المطالبة بالتعويض النقدي", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 205
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 90), pxToMm(y))

    y += 115
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.13 Notifications:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 135), pxToMm(y), "All communications between", { charSpace: 0.3 })

    y += 20
    justify(pdf, "the the Host and the Producer must be made through Makanat.com", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("لإشعارات", pxToMm(getPageWidthInPx() - x - 80), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 90), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.13", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يجب تقديم جميع الإخطارات بين المنتج", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.13 })


    y += 20
    justify(pdf, "والمضيف من خلال قناة التواصل المباشر عبر منصة الحجز Makanat.com", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 60
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.14 Agreement Duration:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 170), pxToMm(y), "This agreement expires", { charSpace: 0.3 })

    y += 20
    justify(pdf, "at the end of its Term unless the Producer requests an additional period, and in all cases, it ends at the expiration of the work of the product Project.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("مدة الاتفاقية", pxToMm(getPageWidthInPx() - x - 98), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 105), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.14", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("تنتهي هذه الاتفاقية في نهاية الفترة" + " " + "المشار", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0. })


    y += 20
    justify(pdf, "إليها ما لم يطلب المنتج ساعات عمل إضافية ، وفي جميع الحالات ، تنتهي عند انتهاء عمل مشروع المنتج", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 20
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 232), pxToMm(y))

    y += 60
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.15 Governing Law:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 140), pxToMm(y), "This agreement shall be", { charSpace: 0.63 })

    y += 20
    justify(pdf, "governed by the laws of Saudi Arabia, with Saudi courts having exclusive jurisdiction.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("القانون الواجب التطبيق", pxToMm(getPageWidthInPx() - x - 160), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 170), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.15", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("تخضع هذه الاتفاقية وتفسر", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.03 })


    y += 20
    justify(pdf, "وفقًا لقوانين المملكة العربية السعودية، وتتمتع المحاكم السعودية بالسلطة القضائية لنظر أي نزاع أو خلاف ينشأ عنها أو فيما يتعلق بها", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 40
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 70), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.16 Bilingual Agreement:')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 170), pxToMm(y), "This agreement is made", { charSpace: 0.28 })

    y += 20
    justify(pdf, "in the Arabic and English languages, with the Arabic language prevailing in case of conflict.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("اللغة السائدة", pxToMm(getPageWidthInPx() - x - 110), pxToMm(y))
    pdf.text(":", pxToMm(getPageWidthInPx() - x - 120), pxToMm(y), { charSpace: 0.3 })
    pdf.text("2.16", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("تم تحرير هذه الإتفاقية باللغتين العربية", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.03 })


    y += 20
    justify(pdf, "والانجليزية وفي حالة وجود تعارض بين النص العربي والنص الإنجليزي يتم ترجيح النص العربي", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 20
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 164), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text(pxToMm(x), pxToMm(y), '2.17')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text(pxToMm(x + 30), pxToMm(y), "This contract is made in two identical copies,", { charSpace: 0.21 })

    y += 20
    justify(pdf, "signed by both parties. Each copy has the same legal force, and each party has received a copy.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("2.17", pxToMm(getPageWidthInPx() - x - 28), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("حرر هذا العقد من ثلاث نسخ متطابقه وقعتا من كلا", pxToMm(getPageWidthInPx() - x - 312), pxToMm(y), { charSpace: 0.2 })


    y += 20
    justify(pdf, "الطرفين، ولكل نسخة الدرجة نفسها من الحجية وقد تسلم كل طرف نسخة منه", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')

    y += 20
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 82), pxToMm(y))

    y += 50
    pdf.roundedRect(pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - x), pxToMm(210), pxToMm(0.75), pxToMm(0.75))

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#000000')
    pdf.rect(pxToMm(x + 5), pxToMm(y + 5), pxToMm(getPageWidthInPx() / 2 - x - 10), pxToMm(30), 'F')

    y += 25
    pdf.setFontSize(pxToPt(18))
    pdf.setTextColor('#ffffff')
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Producer:", pxToMm(x + 15), pxToMm(y))

    // pdf.setDrawColor('#ffffff')
    // pdf.setFillColor('#ffffff')
    // pdf.roundedRect(pxToMm(x + 110), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75), 'F')

    pdf.setFontSize(pxToPt(13.5))
    pdf.setTextColor('#000000')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#producer_name').val())) {
    //     pdf.text($('#producer_name').val(), pxToMm(x + 110) + 2, pxToMm(y - 1))
    // } else {
    //     pdf.text($('#producer_name').val(), pxToMm(x + 110) + pxToMm(110) - 2 - getTextWidth($('#producer_name').val()), pxToMm(y - 1))
    // }
    // pdf.text($('#producer_name').val(), pxToMm(x + 165 - mmToPx((getTextWidth($('#producer_name').val()) / 2))), pxToMm(y - 1))

    pdf.setFontSize(pxToPt(18))
    pdf.setTextColor('#ffffff')
    pdf.text("المـنـتــج", pxToMm(getPageWidthInPx() / 2 - 60), pxToMm(y))

    y += 35
    pdf.setTextColor('#000000')
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("Name:", pxToMm(x + 15), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#000000')
    pdf.roundedRect(pxToMm(x + 110), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_1_name').val())) {
    //     pdf.text($('#box_1_name').val(), pxToMm(x + 110) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_1_name').val(), pxToMm(x + 110) + pxToMm(110) - 2 - getTextWidth($('#box_1_name').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_1_name').val(), pxToMm(x + 165 - mmToPx((getTextWidth($('#box_1_name').val()) / 2))), pxToMm(y - 2))


    pdf.text(":" + "الاسم", pxToMm(getPageWidthInPx() / 2 - 44), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("Title:", pxToMm(x + 15), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#000000')
    pdf.roundedRect(pxToMm(x + 110), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_1_title').val())) {
    //     pdf.text($('#box_1_title').val(), pxToMm(x + 110) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_1_title').val(), pxToMm(x + 110) + pxToMm(110) - 2 - getTextWidth($('#box_1_title').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_1_title').val(), pxToMm(x + 165 - mmToPx((getTextWidth($('#box_1_title').val()) / 2))), pxToMm(y - 2))


    pdf.text(":" + "المسمى الوظيفي", pxToMm(getPageWidthInPx() / 2 - 100), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("ID number:", pxToMm(x + 15), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#000000')
    pdf.roundedRect(pxToMm(x + 110), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_1_id').val())) {
    //     pdf.text($('#box_1_id').val(), pxToMm(x + 110) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_1_id').val(), pxToMm(x + 110) + pxToMm(110) - 2 - getTextWidth($('#box_1_id').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_1_id').val(), pxToMm(x + 165 - mmToPx((getTextWidth($('#box_1_id').val()) / 2))), pxToMm(y - 2))


    pdf.text(":" + "هوية رقم", pxToMm(getPageWidthInPx() / 2 - 60), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("Date:", pxToMm(x + 15), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.setFillColor('#000000')
    pdf.roundedRect(pxToMm(x + 110), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_1_date').val())) {
    //     pdf.text($('#box_1_date').val(), pxToMm(x + 110) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_1_date').val(), pxToMm(x + 110) + pxToMm(110) - 2 - getTextWidth($('#box_1_id').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_1_date').val(), pxToMm(x + 165 - mmToPx((getTextWidth($('#box_1_date').val()) / 2))), pxToMm(y - 2))


    pdf.text(":" + "التاريخ", pxToMm(getPageWidthInPx() / 2 - 45), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.setTextColor('#DB0000')
    pdf.text("Verified via Makanat.com", pxToMm(x + 15), pxToMm(y))
    pdf.text("موثق عبر مكانات", pxToMm(getPageWidthInPx() / 2 - 100), pxToMm(y))

    x += pxToMm(getPageWidthInPx() / 2 + 1000)
    y -= 200

    pdf.roundedRect(pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() - 480), pxToMm(210), pxToMm(0.75), pxToMm(0.75))

    pdf.setDrawColor('#EFEFEF')
    pdf.setFillColor('#EFEFEF')
    pdf.rect(pxToMm(x + 5), pxToMm(y + 5), pxToMm(getPageWidthInPx() - 490), pxToMm(30), 'F')

    y += 25
    pdf.setFontSize(pxToPt(18))
    pdf.setTextColor('#000000')
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Host:", pxToMm(x + 15), pxToMm(y))

    // pdf.setFillColor('#ffffff')
    // pdf.setDrawColor('#000000')
    // pdf.roundedRect(pxToMm(x + 120), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75), 'DF')

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.setFontSize(pxToPt(13.5))
    // if (isEnglishText($('#box_2_host').val())) {
    //     pdf.text($('#box_2_host').val(), pxToMm(x + 120) + 2, pxToMm(y - 1))
    // } else {
    //     pdf.text($('#box_2_host').val(), pxToMm(x + 120) + pxToMm(110) - 2 - getTextWidth($('#box_2_host').val()), pxToMm(y - 1))
    // }
    // pdf.text($('#box_2_host').val(), pxToMm(x + 175 - mmToPx((getTextWidth($('#box_2_host').val()) / 2))), pxToMm(y - 1))


    pdf.setFontSize(pxToPt(18))
    pdf.text("المضيـــف", pxToMm(getPageWidthInPx() - 125), pxToMm(y))

    y += 35
    x += 20
    pdf.setFontSize(pxToPt(13.5))
    pdf.setTextColor('#000000')
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("Name:", pxToMm(x - 5), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.roundedRect(pxToMm(x + 100), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_2_name').val())) {
    //     pdf.text($('#box_2_name').val(), pxToMm(x + 100) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_2_name').val(), pxToMm(x + 100) + pxToMm(110) - 2 - getTextWidth($('#box_2_name').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_2_name').val(), pxToMm(x + 155 - mmToPx((getTextWidth($('#box_2_name').val()) / 2))), pxToMm(y - 1))


    pdf.text(":" + "الاسم", pxToMm(getPageWidthInPx() - 95), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("ID number:", pxToMm(x - 5), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.roundedRect(pxToMm(x + 100), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_2_id').val())) {
    //     pdf.text($('#box_2_id').val(), pxToMm(x + 100) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_2_id').val(), pxToMm(x + 100) + pxToMm(110) - 2 - getTextWidth($('#box_2_id').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_2_id').val(), pxToMm(x + 155 - mmToPx((getTextWidth($('#box_2_id').val()) / 2))), pxToMm(y - 1))


    pdf.text(":" + "هوية رقم", pxToMm(getPageWidthInPx() - 110), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("License/CR No.:", pxToMm(x - 5), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_2_license').val())) {
    //     pdf.text($('#box_2_license').val(), pxToMm(x + 100) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_2_license').val(), pxToMm(x + 100) + pxToMm(110) - 2 - getTextWidth($('#box_2_license').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_2_license').val(), pxToMm(x + 155 - mmToPx((getTextWidth($('#box_2_license').val()) / 2))), pxToMm(y - 1))


    pdf.setDrawColor('#000000')
    pdf.roundedRect(pxToMm(x + 100), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.text(":" + "رخصة/سجل", pxToMm(getPageWidthInPx() - 130), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.text("Date:", pxToMm(x - 5), pxToMm(y))

    pdf.setDrawColor('#000000')
    pdf.roundedRect(pxToMm(x + 100), pxToMm(y - 15), pxToMm(110), pxToMm(20), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#box_2_date').val())) {
    //     pdf.text($('#box_2_date').val(), pxToMm(x + 100) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#box_2_date').val(), pxToMm(x + 100) + pxToMm(110) - 2 - getTextWidth($('#box_2_date').val()), pxToMm(y - 2))
    // }
    pdf.text($('#box_2_date').val(), pxToMm(x + 155 - mmToPx((getTextWidth($('#box_2_date').val()) / 2))), pxToMm(y - 1))


    pdf.text(":" + "التاريخ", pxToMm(getPageWidthInPx() - 97), pxToMm(y))

    y += 35
    pdf.setFontSize(pxToPt(13.5))
    pdf.setTextColor('#DB0000')
    pdf.text("Verified via Makanat.com", pxToMm(x - 5), pxToMm(y))
    pdf.text("موثق عبر مكانات", pxToMm(getPageWidthInPx() - 150), pxToMm(y))

    pdf.addPage();
    var x = 55
    var y = 60
    addFooter()

    pdf.setFontSize(pxToPt(30))
    pdf.setFont('IBMPlexSansArabic-Medium', 'normal')
    pdf.text("Appendix (1):", pxToMm(x), pxToMm(y))

    pdf.text(":(1)الملحق", pxToMm(getPageWidthInPx() - 185), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(18))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Details & fees", pxToMm(x), pxToMm(y))

    pdf.text("التفاصيل والرسوم", pxToMm(getPageWidthInPx() - 180), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Shoot Date", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#shoot_date').val())) {
    //     pdf.text($('#shoot_date').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#shoot_date').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#shoot_date').val()), pxToMm(y - 2))
    // }
    pdf.text($('#shoot_date').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#shoot_date').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("تاريخ التصوير", pxToMm(getPageWidthInPx() - 130), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Start Time", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#start_time_last').val())) {
    //     pdf.text($('#start_time_last').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#start_time_last').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#start_time_last').val()), pxToMm(y - 2))
    // }
    pdf.text($('#start_time_last').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#start_time_last').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("موعد الدخول", pxToMm(getPageWidthInPx() - 135), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("End Time", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#end_time_last').val())) {
    //     pdf.text($('#end_time_last').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#end_time_last').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#end_time_last').val()), pxToMm(y - 2))
    // }
    pdf.text($('#end_time_last').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#end_time_last').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("موعد الخروج", pxToMm(getPageWidthInPx() - 130), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Total Hours", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#total_hours').val())) {
    //     pdf.text($('#total_hours').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#total_hours').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#total_hours').val()), pxToMm(y - 2))
    // }
    pdf.text($('#total_hours').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#total_hours').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("مجموع الساعات", pxToMm(getPageWidthInPx() - 155), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Hourly Rate", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#hourly_rate').val())) {
    //     pdf.text($('#hourly_rate').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#hourly_rate').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#hourly_rate').val()), pxToMm(y - 2))
    // }
    pdf.text($('#hourly_rate').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#hourly_rate').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("معدل سعر الساعة الواحدة", pxToMm(getPageWidthInPx() - 210), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Overtime Rate", pxToMm(x), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("is defined as the Hourly Rate", pxToMm(x + 100), pxToMm(y), { charSpace: 0.58 })

    y += 20
    justify(pdf, "multiplied by 1.5 plus time-and-a-half for any property and/or site managers.", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 56))

    y -= 20
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("معدل العمل الاضافي", pxToMm(getPageWidthInPx() - 165), pxToMm(y))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    pdf.text("يتم تعريف معدل العمل الإضافي على أنه", pxToMm(getPageWidthInPx() - 370), pxToMm(y))

    y += 20
    justify(pdf, "قيمة الساعة الواحدة مضروبًا في 1.5 لرسوم العقار واجور مدير الموقع", pxToMm(getPageWidthInPx() - x - 313), pxToMm(y), pxToMm(getPageWidthInPx() / 2 - 80), 'rtl')


    y += 20
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 40), pxToMm(y))

    y += 40
    pdf.setDrawColor('#D5D5D5')
    pdf.setFillColor('#D5D5D5')
    pdf.rect(pxToMm(x - 10), pxToMm(y), pxToMm(getPageWidthInPx() - x * 2 + 20), pxToMm(40), 'F')

    y += 25
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Total Booking Value", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#ffffff')
    pdf.setFillColor('#ffffff')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75), 'F')

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#total_booking').val())) {
    //     pdf.text($('#total_booking').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#total_booking').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#total_booking').val()), pxToMm(y - 2))
    // }
    pdf.text($('#total_booking').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#total_booking').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("إجمالي قيمة الحجز", pxToMm(getPageWidthInPx() - 165), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Protection deposit", pxToMm(x), pxToMm(y))

    pdf.setDrawColor('#B5B5B5')
    pdf.roundedRect(pxToMm(getPageWidthInPx() / 2 - x - 41), pxToMm(y - 20), pxToMm(200), pxToMm(30), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    // if (isEnglishText($('#protection_deposit').val())) {
    //     pdf.text($('#protection_deposit').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + 2, pxToMm(y - 2))
    // } else {
    //     pdf.text($('#protection_deposit').val(), pxToMm(getPageWidthInPx() / 2 - x - 41) + pxToMm(200) - 2 - getTextWidth($('#protection_deposit').val()), pxToMm(y - 2))
    // }
    pdf.text($('#protection_deposit').val(), pxToMm((getPageWidthInPx() / 2) - (mmToPx(getTextWidth($('#protection_deposit').val()) / 2))) + 2, pxToMm(y - 2))


    pdf.text("مبلغ تأمين", pxToMm(getPageWidthInPx() - 115), pxToMm(y))

    y += 40
    pdf.setFontSize(pxToPt(15))
    pdf.setFont('IBMPlexSansArabic-SemiBold', 'normal')
    pdf.text("Host Rules", pxToMm(x), pxToMm(y))

    pdf.text("قواعد المضيف", pxToMm(getPageWidthInPx() - 142), pxToMm(y))

    y += 20
    pdf.roundedRect(pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() - x * 2), pxToMm(380), pxToMm(0.75), pxToMm(0.75))

    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')

    if (isEnglishText2($('#host_rules').val())) {
        justify(pdf, $('#host_rules').val().length > 0 ? $('#host_rules').val() : '', pxToMm(x + 5), pxToMm(y + 20), pxToMm(getPageWidthInPx() - x * 2) - 2)
    } else {
        justify(pdf, $('#host_rules').val().length > 0 ? $('#host_rules').val() : '', pxToMm(x + 5), pxToMm(y + 20), pxToMm(getPageWidthInPx() - x * 2) - 2, 'rtl')
    }

    y += 400
    pdf.setFontSize(pxToPt(13.5))
    pdf.setFont('IBMPlexSansArabic-Regular', 'normal')
    justify(pdf, "إخلاء مسؤولية: يقر المستخدم بأن مقدمي الخدمات التي توفرهم مكانات إنما هم مقاولون مستقلون، وأن علاقة مكانات بمقدمي الخدمات هي علاقة مستقلة تماما عن علاقتها بالمستخدم. لذلك، لا يجوز صراحة ولا ضمناً أن تكون مكانات مسؤولة عن أي خدمة مقدمة أو خسارة أو ضرر ينشا أو يترتب عن ذلك بشكل مباشر أو غير مباشر . ولا تتدخل مكانات في تقييم مقدمي الخدمات، ولا يجوز اعتبار وجود اسم مقدم الخدمة في الدليل أو بالمنصة بأي حال على أنه توصية لاختيار مقدم خدمة معين. ويكون مقدم الخدمة مسؤولاً وحده عن جودة ومدى تناسب الخدمة المقدمة كما يكون مسؤولاً عن المعلومات التي يقدمها", pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() - x - 52), 'rtl')

    y += 80
    pdf.text(".", pxToMm(getPageWidthInPx() - x - 300), pxToMm(y))

    y += 20
    pdf.line(pxToMm(x), pxToMm(y), pxToMm(getPageWidthInPx() - x), pxToMm(y))

    y += 20
    pdf.setFontSize(pxToPt(11))
    pdf.text("© Makanat International LLC. | 4549 Al Urubah Rd, 8498 Al Olaya Dist, Riyadh 12333 | support@makanat.com | makanat.com", pxToMm(getPageWidthInPx() / 2), pxToMm(y), { maxWidth: pxToMm(getPageWidthInPx() - x - 72), align: 'center' })

    function justify(pdfGen, text, xStart, yStart, textWidth, textDirection = "ltr", bullet = false, page2 = false) {
        text = text.replace(/(?:\r\n|\r|\n)/g, ' ');
        text = text.replace(/ +(?= )/g, '');
        const lineHeight = pdfGen.getTextDimensions('a').h * 1.5;
        const words = text.split(' ');
        let lineNumber = 0;
        let wordsInfo = [];
        let lineLength = 0;
        for (const word of words) {
            const wordLength = pdfGen.getTextWidth(word + ' ');
            if (wordLength + lineLength > textWidth) {
                writeLine(pdfGen, wordsInfo, lineLength, lineNumber++, xStart, yStart, lineHeight, textWidth, textDirection);
                wordsInfo = [];
                lineLength = 0;
            }
            wordsInfo.push({ text: word, wordLength });
            lineLength += wordLength;
        }
        if (wordsInfo.length > 0) {
            writeLastLine(wordsInfo, pdfGen, xStart, yStart, lineNumber, lineHeight, textDirection, bullet, page2);
        }
    }

    function writeLastLine(wordsInfo, pdfGen, xStart, yStart, lineNumber, lineHeight, textDirection, bullet, page2) {
        const line = wordsInfo.map(x => x.text).join(' ');
        const lineLength = wordsInfo.reduce((total, wordInfo) => total + wordInfo.wordLength, 0);

        let x;
        if (textDirection === 'rtl') {
            // Starting from the last position from the right
            // x = xStart + pdfGen.internal.pageSize.width - lineLength - (lineLength > 16 ? 129 : 128);
            // x = pxToMm(xStart - 50 - getTextWidth(line))
            x = pxToMm(getPageWidthInPx() - 50) - lineLength
            x = bullet ? x - 5 : x
            x = page2 ? x - 2 : x
        } else {
            x = xStart;
        }

        pdfGen.text(line, x, yStart + lineNumber * lineHeight);
    }

    function writeLine(pdfGen, wordsInfo, lineLength, lineNumber, xStart, yStart, lineHeight, textWidth, textDirection) {
        const wordSpacing = (textWidth - lineLength) / (wordsInfo.length - 1);
        let x = xStart;
        const y = yStart + lineNumber * lineHeight;

        const reversedWordsInfo = textDirection === 'rtl' ? wordsInfo.slice().reverse() : wordsInfo;

        for (const wordInfo of reversedWordsInfo) {
            pdfGen.text(wordInfo.text, x, y);
            x += wordInfo.wordLength + wordSpacing;
        }
    }

    // Define the IWordInfo interface in the global scope
    var IWordInfo = function (text, wordLength) {
        this.text = text;
        this.wordLength = wordLength;
    };

    // var blobPDF = new Blob([pdf.output('blob')], { type: "application/pdf" })
    // var blobURL = URL.createObjectURL(blobPDF)

    // // Open the PDF in a new window
    // window.open(blobURL, '_blank');
}

function downloadPDF() {
    pdf.save('Location Agreement' + '.pdf')
}

function printPDF() {
    pdf.autoPrint()
    pdf.output('dataurlnewwindow')
}

// generatePDF()

// var blobPDF = new Blob([pdf.output('blob')], { type: "application/pdf" })
// var blobURL = URL.createObjectURL(blobPDF)

// $('#preview-frame').attr('src', blobURL)
