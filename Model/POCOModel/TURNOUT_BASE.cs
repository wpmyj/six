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
	public partial class TURNOUT_BASE
	{
		public TURNOUT_BASE ToPOCO(bool isPOCO = true){
			return new TURNOUT_BASE(){
				TURNOUT_ID = this.TURNOUT_ID,
				ORG_CODE = this.ORG_CODE,
				LINE_NO = this.LINE_NO,
				DIRECTION = this.DIRECTION,
				STATION = this.STATION,
				STATION_CODE = this.STATION_CODE,
				LINE_TYPE = this.LINE_TYPE,
				TURNOUT_NO = this.TURNOUT_NO,
				TURNOUT_TYPE = this.TURNOUT_TYPE,
				SKEEOERS_TYPE = this.SKEEOERS_TYPE,
				TURNOUT_CATE = this.TURNOUT_CATE,
				FROG_NO = this.FROG_NO,
				FROG_STRUCTURE = this.FROG_STRUCTURE,
				FROG_LENGTH = this.FROG_LENGTH,
				BLADE_TYPE = this.BLADE_TYPE,
				BLADE_LEFTLEN = this.BLADE_LEFTLEN,
				BLADE_RIGHTLEN = this.BLADE_RIGHTLEN,
				TURNOUT_LENGTH = this.TURNOUT_LENGTH,
				SWITCH_TYPE = this.SWITCH_TYPE,
				BRANCH_NUM = this.BRANCH_NUM,
				GENERAL_NUM = this.GENERAL_NUM,
				CONCRETE_NUM = this.CONCRETE_NUM,
				H_SPEED = this.H_SPEED,
				V_SPEED = this.V_SPEED,
				DESIGN_DRAWNO = this.DESIGN_DRAWNO,
				TURNOUT_NOTE = this.TURNOUT_NOTE,
				TURNOUT_FAC = this.TURNOUT_FAC,
				MEASURER = this.MEASURER,
				MEASURER_DUTY = this.MEASURER_DUTY,
				LAYER = this.LAYER,
				LAYER_DUTY = this.LAYER_DUTY,
				LAYER_TIME = this.LAYER_TIME,
				ONLINER = this.ONLINER,
				ONLINE_DUTY = this.ONLINE_DUTY,
				ONLINE_TIME = this.ONLINE_TIME,
				CHECKER = this.CHECKER,
				CHECKER_DUTY = this.CHECKER_DUTY,
				SKEEOERS_FACTORY = this.SKEEOERS_FACTORY,
				SKEEOERS_ONLINE = this.SKEEOERS_ONLINE,
				SKEEOERS_DAMAGE = this.SKEEOERS_DAMAGE,
				SKEEOERS_REPLACETIME = this.SKEEOERS_REPLACETIME,
				STOCK_ONLINE = this.STOCK_ONLINE,
				STOCK_REPLACETIME = this.STOCK_REPLACETIME,
				BLADE_ONLINE = this.BLADE_ONLINE,
				BLADE_DIRECT = this.BLADE_DIRECT,
				BLADE_DRAWNO = this.BLADE_DRAWNO,
				BLADE_WEIGHT = this.BLADE_WEIGHT,
				BLADE_REPLACETIME = this.BLADE_REPLACETIME,
				FROG_FACTORY = this.FROG_FACTORY,
				FROG_ONLINE = this.FROG_ONLINE,
				FROG_DRAWNO = this.FROG_DRAWNO,
				FROG_WEIGHT = this.FROG_WEIGHT,
				FROG_REPLACETIME = this.FROG_REPLACETIME,
				ANNUAL_WEIGHT = this.ANNUAL_WEIGHT,
				TOTAL_WEIGHT = this.TOTAL_WEIGHT,
				REPAIR_NOTE = this.REPAIR_NOTE,
				REMOVE_FLAG = this.REMOVE_FLAG,
				SLEEPER_PICURL = this.SLEEPER_PICURL,
				RAIL_PICURL = this.RAIL_PICURL,
				C_DEP_CODE = this.C_DEP_CODE,
				C_MEMO = this.C_MEMO,
				C_LOCK_TYPE = this.C_LOCK_TYPE,
				C_NORULE = this.C_NORULE,
				N_SWITCH_RAIL_MILE = this.N_SWITCH_RAIL_MILE,
				C_CROSS_MARK = this.C_CROSS_MARK,
				C_TURNOUT_TYPE = this.C_TURNOUT_TYPE,
				C_GAUGE_TYPE = this.C_GAUGE_TYPE,
				C_RUN_STATUS = this.C_RUN_STATUS,
				LINE_NUM = this.LINE_NUM,
			};
		}
	} 
}
