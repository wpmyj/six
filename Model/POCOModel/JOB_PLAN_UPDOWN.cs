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
	public partial class JOB_PLAN_UPDOWN
	{
		public JOB_PLAN_UPDOWN ToPOCO(bool isPOCO = true){
			return new JOB_PLAN_UPDOWN(){
				PHONE = this.PHONE,
				PLAN_ID = this.PLAN_ID,
				LASTTIME = this.LASTTIME,
				UPDOWN = this.UPDOWN,
			};
		}
	} 
}
