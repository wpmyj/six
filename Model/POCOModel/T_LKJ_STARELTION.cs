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
	public partial class T_LKJ_STARELTION
	{
		public T_LKJ_STARELTION ToPOCO(bool isPOCO = true){
			return new T_LKJ_STARELTION(){
				PKID = this.PKID,
				STATION_NAME = this.STATION_NAME,
				RWB_NAME = this.RWB_NAME,
				RELRWB_NAME = this.RELRWB_NAME,
				DEPT_NAME = this.DEPT_NAME,
				RELDEPT_NAME = this.RELDEPT_NAME,
				CWD_NAME = this.CWD_NAME,
				JWD_NAME = this.JWD_NAME,
				CLD_NAME = this.CLD_NAME,
				GDD_NAME = this.GDD_NAME,
				GWD_NAME = this.GWD_NAME,
				DWD_NAME = this.DWD_NAME,
				TXD_NAME = this.TXD_NAME,
				MEMO = this.MEMO,
			};
		}
	} 
}
