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
	public partial class JOB_PLAN_WARNPHONESET
	{
		public JOB_PLAN_WARNPHONESET ToPOCO(bool isPOCO = true){
			return new JOB_PLAN_WARNPHONESET(){
				PKID = this.PKID,
				DEPT_CODE = this.DEPT_CODE,
				MEMBER_ID = this.MEMBER_ID,
				PHONE_NO = this.PHONE_NO,
				LST_DATE = this.LST_DATE,
				LST_USER = this.LST_USER,
				EXT1 = this.EXT1,
				EXT2 = this.EXT2,
			};
		}
	} 
}