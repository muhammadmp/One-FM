# encoding: utf-8
# Copyright (c) 2013, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.utils import formatdate, getdate, flt, add_days
from datetime import datetime
import datetime
# import operator
import re
from datetime import date
from dateutil.relativedelta import relativedelta


def execute(filters=None):
    columns, data = get_columns(filters), get_data(filters)
    return columns, data

def get_columns(filters):
    return [
        _("Request for Supplier Quotation") + ":Link/Request for Supplier Quotation:150",
        _("Transaction Date") + ":Date:150",
        _("Status") + "::100"
        ]


def get_conditions(filters):
    conditions = ""
    doc_status = {"Draft": 0, "Submitted": 1, "Cancelled": 2}

    if filters.get("docstatus"):
        conditions += " and docstatus = {0}".format(doc_status[filters.get("docstatus")])

    if filters.get("from_date"):
        conditions += " and transaction_date>='{0}' ".format(filters.get("from_date"))
    if filters.get("to_date"):
        conditions += " and transaction_date<='{0}' ".format(filters.get("to_date"))

    return conditions


def get_data(filters):
    conditions = get_conditions(filters)
    data=[]
    li_list=frappe.db.sql("""select name, transaction_date, docstatus from `tabRequest for Supplier Quotation` where 1=1 {0} """.format(conditions),as_dict=1)
    
    for purchase in li_list:

        row = [
            purchase.name,
            purchase.transaction_date,
            'Draft' if purchase.docstatus==0 else 'Submitted' if purchase.docstatus==1 else 'Cancelled'
        ]
        data.append(row)

    return data
