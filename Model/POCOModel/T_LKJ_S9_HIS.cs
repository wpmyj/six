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
	public partial class T_LKJ_S9_HIS
	{
		public T_LKJ_S9_HIS ToPOCO(bool isPOCO = true){
			return new T_LKJ_S9_HIS(){
				ID = this.ID,
				FLOWID = this.FLOWID,
				WORKID = this.WORKID,
				GID = this.GID,
				FLAG = this.FLAG,
				RWBNAME = this.RWBNAME,
				RWBCODE = this.RWBCODE,
				TUNNELNAME = this.TUNNELNAME,
				TUNNELCODE = this.TUNNELCODE,
				AUXILIARYLINENAME = this.AUXILIARYLINENAME,
				AUXILIARYCODE = this.AUXILIARYCODE,
				MARK = this.MARK,
				REMARK = this.REMARK,
				LASTDATE = this.LASTDATE,
				BACKDESC = this.BACKDESC,
				LINENAME = this.LINENAME,
				LINECODE = this.LINECODE,
				LINEDIRECTION = this.LINEDIRECTION,
				MARKID = this.MARKID,
				CREATE_TIME = this.CREATE_TIME,
				USER_NAME = this.USER_NAME,
				DEPT_CODE = this.DEPT_CODE,
				KMCENTER = this.KMCENTER,
				FULLLENGTH = this.FULLLENGTH,
			};
		}
	} 
}
