//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class T_ASS_PLAN_FLOW
	{
		public T_ASS_PLAN_FLOW ToPOCO(bool isPOCO = true){
			return new T_ASS_PLAN_FLOW(){
				PKID = this.PKID,
				CJCODE = this.CJCODE,
				CJNAME = this.CJNAME,
				CJZR = this.CJZR,
				PLANNAME = this.PLANNAME,
				RQ = this.RQ,
				CREATER = this.CREATER,
				CREATERTEL = this.CREATERTEL,
				CREATETIME = this.CREATETIME,
				AUDITER = this.AUDITER,
				AUDITTIME = this.AUDITTIME,
				SENDER = this.SENDER,
				SENDTIME = this.SENDTIME,
				REPORTER = this.REPORTER,
				REPORTTIME = this.REPORTTIME,
				ISCREATE = this.ISCREATE,
				ISSUBMIT = this.ISSUBMIT,
				ISAUDIT = this.ISAUDIT,
				ISREJECT = this.ISREJECT,
				ISAUDIT2 = this.ISAUDIT2,
				ISREJECT2 = this.ISREJECT2,
				ISFINISHED = this.ISFINISHED,
				PLANTYPE = this.PLANTYPE,
				JOBTYPE = this.JOBTYPE,
				BZ = this.BZ,
				LEADER = this.LEADER,
				AUDIT_MEMBER = this.AUDIT_MEMBER,
				AUDIT_VIEW = this.AUDIT_VIEW,
				SENDER_MEMBER = this.SENDER_MEMBER,
				SENDER_VIEW = this.SENDER_VIEW,
				CREATE_MEMBER = this.CREATE_MEMBER,
				REPORT_MEMBER = this.REPORT_MEMBER,
				REPORT_VIEW = this.REPORT_VIEW,
			};
		}
	} 
}