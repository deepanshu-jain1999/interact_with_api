// ========= date calendar ==========//
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();

var data = [{
    date: year + '-' + month + '-' + (date - 1),
}, {
    date: year + '-' + month + '-' + date,
}, {
    date: new Date(year, month - 1, date + 1),
}, {
    date: '2016-10-31',
    value: '2016-10-31'
}];


$('#two').calendar({
    trigger: '#dt',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two1').calendar({
    trigger: '#dt1',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two2').calendar({
    trigger: '#dt2',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two3').calendar({
    trigger: '#dt3',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two4').calendar({
    trigger: '#dt4',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two5').calendar({
    trigger: '#dt5',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two6').calendar({
    trigger: '#dt6',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two7').calendar({
    trigger: '#dt7',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two8').calendar({
    trigger: '#dt8',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two9').calendar({
    trigger: '#dt9',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two10').calendar({
    trigger: '#dt10',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two11').calendar({
    trigger: '#dt11',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two12').calendar({
    trigger: '#dt12',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});

$('#two13').calendar({
    trigger: '#dt13',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two14').calendar({
    trigger: '#dt14',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two15').calendar({
    trigger: '#dt15',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
$('#two16').calendar({
    trigger: '#dt16',
    // offset: [0, 1],
    //zIndex: 999,
    data: data,
    onSelected: function (view, date, data) {

    },
    onClose: function (view, date, data) {

    }
});
// ========= date calendar end==========//