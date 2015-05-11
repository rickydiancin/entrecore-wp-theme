var TableAdvanced = function () {

    var initTable1 = function () {
        var table = $('#sample_1');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [0, 'asc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF"
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel"
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Record Available Yet"
			}
        });

        var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	
	var initSnapshotTable = function () {
        var table = $('#snapshots_table');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [1, 'desc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					"sFileName": display_name+" Snapshots.pdf",
					"sTitle": "List of Servers",
					"mColumns": [ 0, 1, 2 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Snapshots.xls",
					"sTitle": "List of Snapshots",
					"mColumns": [ 0, 1, 2 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Images Have Been Created Yet"
			}
        });

        var tableWrapper = $('#snapshots_table_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	var initBackupsTable = function () {
        var table = $('#backups_table');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [1, 'desc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					"sFileName": display_name+" Snapshots.pdf",
					"sTitle": "List of Servers",
					"mColumns": [ 0, 1, 2 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Snapshots.xls",
					"sTitle": "List of Snapshots",
					"mColumns": [ 0, 1, 2 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Backups Have Been Created Yet"
			}
        });

        var tableWrapper = $('#snapshots_table_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	var initDomainsTable = function () {
        var table = $('#domains-listing');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [1, 'asc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					"sFileName": display_name+" Sites.pdf",
					"sTitle": "List of Sites",
					"mColumns": [ 0 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Sites.xls",
					"sTitle": "List of Sites",
					"mColumns": [ 0 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Domains Have Been Created Yet"
			}
        });

        var tableWrapper = $('#domains-listing_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	
	var initPTRTable = function () {
        var table = $('#ptr-listing');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default hide",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [2, 'asc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF","sFileName": display_name+" PTR Table.pdf",
					"sTitle": "PTR Table",
					"mColumns": [ 0, 1 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" PTR Table.xls",
					"sTitle": "PTR Table",
					"mColumns": [ 0, 1 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Record Available Yet"
			}
        });

        var tableWrapper = $('#ptr-listing_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	
	
	var initTableSupportTickets = function () {
        var table = $('#support_tickets');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [4, 'desc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					"sFileName": display_name+" Support Tickets.pdf",
					"sTitle": "Support Tickets",
					"mColumns": [ 0, 1, 2, 3, 4 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Support Tickets.xls",
					"sTitle": "Support Tickets",
					"mColumns": [ 0, 1, 2, 3, 4 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Support Tickets Have Been Created Yet"
			}
        });

        var tableWrapper = $('#support_tickets_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	
	var initTableInvoices = function () {
        var table = $('#invoices_list');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [0, 'desc']
            ],
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					"sFileName": display_name+" Invoices.pdf",
					"sTitle": "Invoices",
					"mColumns": [ 0, 1, 2, 3, 4 ],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Invoices.xls",
					"sTitle": "Invoices",
					"mColumns": [ 0, 1, 2, 3, 4 ],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "No Invoice Is Available Yet"
			}
        });

        var tableWrapper = $('#invoices_list_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }
	
	var initTableHistory = function () {
        var table = $('#droplet_history_table');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group cls-btn",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "bSort": false,
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": false,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-4'l><'col-md-6 col-sm-4'f><'col-md-6 col-sm-4'b>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
                	"sFileName": display_name+" ServerHistory.pdf",
					"sTitle": "Server History",
					"mColumns": [ 0, 1, 2],
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" ServerHistory.xls",
					"sTitle": "Server History",
					"mColumns": [ 0, 1, 2],
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "Server History Is Empty"
			}
        });

        var tableWrapper = $('#droplet_history_table_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }


	var initResultsLog = function () {
        var table = $('#test_results_log_container');
        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group cls-btn",
            "buttons": {
                "normal": "btn btn-sm default",
                "disabled": "btn btn-sm default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "bSort": false,
            
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
			"bPaginate": true,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF",
					 "sFileName": display_name+" Server Logs.pdf",
					"sTitle": "Server Logs"
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel",
					"sFileName": display_name+" Server Logs.xls",
					"sTitle": "Server Logs"
                }]
            },
			"oLanguage": {
			  "sEmptyTable": "Server Logs Not Available Yet"
			}
        });

        var tableWrapper = $('#test_results_log_container_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
			//initServerListing();
			initTableSupportTickets();
			initTableInvoices();
			initTableHistory();
			initDomainsTable();
			initSnapshotTable();
			initBackupsTable();
			initPTRTable();
			
        },
		initAjax: function(){
			initResultsLog();
		}

    };

}();