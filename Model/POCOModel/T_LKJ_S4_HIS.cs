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
	public partial class T_LKJ_S4_HIS
	{
		public T_LKJ_S4_HIS ToPOCO(bool isPOCO = true){
			return new T_LKJ_S4_HIS(){
				ID = this.ID,
				FLOWID = this.FLOWID,
				WORKID = this.WORKID,
				GID = this.GID,
				MARKID = this.MARKID,
				FLAG = this.FLAG,
				RWBNAME = this.RWBNAME,
				RWBCODE = this.RWBCODE,
				LINENAME = this.LINENAME,
				LINECODE = this.LINECODE,
				LINEDIRECTION = this.LINEDIRECTION,
				STATIONNAME = this.STATIONNAME,
				STATIONCODE = this.STATIONCODE,
				TURNOUTCODE = this.TURNOUTCODE,
				KMSWITCHPOINT = this.KMSWITCHPOINT,
				MARK = this.MARK,
				REMARK = this.REMARK,
				LASTDATE = this.LASTDATE,
				BACKDESC = this.BACKDESC,
				CROSSNUMBER = this.CROSSNUMBER,
				TURNOUTOPENING = this.TURNOUTOPENING,
				LAYINGFIGURE = this.LAYINGFIGURE,
				CREATE_TIME = this.CREATE_TIME,
				USER_NAME = this.USER_NAME,
				DEPT_CODE = this.DEPT_CODE,
			};
		}
	} 
}
