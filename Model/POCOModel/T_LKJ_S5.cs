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
	public partial class T_LKJ_S5
	{
		public T_LKJ_S5 ToPOCO(bool isPOCO = true){
			return new T_LKJ_S5(){
				GID = this.GID,
				LINENAME = this.LINENAME,
				LINECODE = this.LINECODE,
				DISTRICT = this.DISTRICT,
				LINEDIRECTION = this.LINEDIRECTION,
				ALLOWSPEED = this.ALLOWSPEED,
				VERTICALSPEED = this.VERTICALSPEED,
				LATERALSPEED = this.LATERALSPEED,
				SLOWLOCATION = this.SLOWLOCATION,
				SLOWSPEED = this.SLOWSPEED,
				SLOWREASON = this.SLOWREASON,
				MARK = this.MARK,
				REMARK = this.REMARK,
				LASTDATE = this.LASTDATE,
				MARKID = this.MARKID,
				CREATE_TIME = this.CREATE_TIME,
				USER_NAME = this.USER_NAME,
				DEPT_CODE = this.DEPT_CODE,
			};
		}
	} 
}
