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
	public partial class CURVE_BASE
	{
		public CURVE_BASE ToPOCO(bool isPOCO = true){
			return new CURVE_BASE(){
				PKID = this.PKID,
				C_GWD_CODE = this.C_GWD_CODE,
				C_DEP_CODE = this.C_DEP_CODE,
				C_LINE_CODE = this.C_LINE_CODE,
				C_LINE_DIR = this.C_LINE_DIR,
				C_LINE_CAT = this.C_LINE_CAT,
				C_RUN_STATUS = this.C_RUN_STATUS,
				N_START_MILE = this.N_START_MILE,
				N_END_MILE = this.N_END_MILE,
				C_LONGCHAIN_MARK = this.C_LONGCHAIN_MARK,
				C_CURVE_DIR = this.C_CURVE_DIR,
				N_CURVE_RADIUS = this.N_CURVE_RADIUS,
				N_DEFLECTION_ANGLE = this.N_DEFLECTION_ANGLE,
				C_GAUGE_TYPE = this.C_GAUGE_TYPE,
				N_GAUGE_WIDEN = this.N_GAUGE_WIDEN,
				N_SUPHIGH = this.N_SUPHIGH,
				N_SLOPE_RATE = this.N_SLOPE_RATE,
				N_START_TANGENT = this.N_START_TANGENT,
				N_START_ALLAYLINE = this.N_START_ALLAYLINE,
				N_END_ALLAYLINE = this.N_END_ALLAYLINE,
				N_END_TANGENT = this.N_END_TANGENT,
				N_CURVE_FULLLEN = this.N_CURVE_FULLLEN,
				N_AVG_SPEED = this.N_AVG_SPEED,
				N_SORT_RADIUS = this.N_SORT_RADIUS,
				C_JOINTLESS_TRACK = this.C_JOINTLESS_TRACK,
				SLEEPERTYPE = this.SLEEPERTYPE,
				SLEEPERCONFIG = this.SLEEPERCONFIG,
				ACCESSORYTYPE = this.ACCESSORYTYPE,
				T_CRT_TM = this.T_CRT_TM,
				C_CRT_NAME = this.C_CRT_NAME,
				N_ORDER = this.N_ORDER,
				C_MEMO = this.C_MEMO,
				ISSMALLCURVE = this.ISSMALLCURVE,
			};
		}
	} 
}
